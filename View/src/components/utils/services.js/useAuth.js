import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../constant.js';

const setAccessTokenLocalStorage = (accessToken, expiresIn) => {
  const expiryTime = new Date().getTime() + expiresIn * 1000; // expiresIn is in seconds
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('accessTokenExpiry', expiryTime);
};

const getAccessTokenLocalStorage = () => {
  return localStorage.getItem('accessToken');
};

const getAccessTokenExpiryLocalStorage = () => {
  return parseInt(localStorage.getItem('accessTokenExpiry'), 10);
};

const setRefreshTokenCookie = (refreshToken) => {
  document.cookie = `refreshToken=${refreshToken}; path=/; HttpOnly;`;
};

const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('refreshToken=')) {
      return cookie.substring('refreshToken='.length);
    }
  }
  return null;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = getRefreshTokenFromCookie();
    const accessToken = getAccessTokenLocalStorage();
    const accessTokenExpiry = getAccessTokenExpiryLocalStorage();
    if (refreshToken && accessToken && new Date().getTime() < accessTokenExpiry) {
      setIsLoggedIn(true);
      setupTokenRefresh();
    }
  }, []);

  const login = async (values, url) => {
    try {
      const { email, password } = values; // Destructure email and password from values
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Ensure correct structure
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { accessToken, refreshToken, expiresIn, userId } = data; // Include userId in the response
      setAccessTokenLocalStorage(accessToken, expiresIn);
      setRefreshTokenCookie(refreshToken);

      setIsLoggedIn(true);
      setupTokenRefresh();

      // Fetch user info after login
      fetchUserInfo(userId); // Pass the userId to the fetchUserInfo function
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  //fetch user details
  const fetchUserInfo = useCallback(async (userId) => {
    const userUrl = `${endpoints.getUser}/${userId}`;

    try {
      const accessToken = getAccessTokenLocalStorage();
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const userResponse = await fetch(userUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user info');
      }

      const userData = await userResponse.json();
      localStorage.setItem('userDetails', JSON.stringify(userData)); // Ensure JSON.stringify here
      setData(userData);
      console.log(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Fetch user info error:', error);
    }
  }, [navigate]);

  const logout = () => {
    console.log(window.localStorage);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessTokenExpiry');
    deleteCookie('refreshToken');
    setIsLoggedIn(false);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = getRefreshTokenFromCookie();
      if (!refreshToken) {
        throw new Error('Refresh token not found');
      }

      const response = await fetch('https://your-auth-api.com/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials (cookies) in the request
      });

      if (!response.ok) {
        throw new Error('Failed to refresh access token');
      }

      const data = await response.json();
      const { accessToken } = data;

      setAccessTokenLocalStorage(accessToken, 900); // Set expiresIn to 15 minutes (900 seconds)
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Refresh token error:', error);
      logout();
    }
  };

  const setupTokenRefresh = () => {
    const accessTokenExpiry = getAccessTokenExpiryLocalStorage();
    if (!accessTokenExpiry) return;

    const timeUntilExpiry = accessTokenExpiry - new Date().getTime();
    const refreshTime = timeUntilExpiry - 60000; // Refresh 1 minute before expiry

    if (refreshTime > 0) {
      setTimeout(() => {
        refreshAccessToken();
      }, refreshTime);
    } else {
      refreshAccessToken();
    }
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
