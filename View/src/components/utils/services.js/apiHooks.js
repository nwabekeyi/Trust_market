import { useState, useMemo, useCallback } from 'react';

// Custom hook for making POST requests
export const usePostAPI = (url) => {
  const submit = useCallback(async (requestData) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(requestData),
      });

      // Only handle errors here, don't set data state
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
    } catch (error) {
      throw error; // Re-throw the error to be caught in the component using this hook
    }
  }, [url]);

  return useMemo(() => ({ submit }), [submit]);
};

// Custom hook for making GET requests
export const useGetAPI = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const submit = useCallback(async () => {
    console.log('i am called')
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          // Add authorization header if needed
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData)
    } catch (error) {
      setError(error);
    }
  }, [url]);

  return useMemo(() => ({ data, error, submit }), [data, error, submit]);
};

// Custom hook for making PUT requests
export const useUpdateAPI = () => {
  const [error, setError] = useState(null);

  const submit = useCallback(async (url, requestData) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if needed
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(requestData),
      });

      // Only handle errors here, don't set data state
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return useMemo(() => ({ error, submit }), [error, submit]);
};

// Custom hook for making DELETE requests
export const useDeleteAPI = () => {
  const [error, setError] = useState(null);

  const submit = useCallback(async (url) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          // Add authorization header if needed
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      // Only handle errors here, don't set data state
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return useMemo(() => ({ error, submit }), [error, submit]);
};
