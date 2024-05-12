

export const authenticateUser = async  (apiUrl, method, credentials) =>  {
    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data; // Assuming the API returns the JWT token in the response data
    } catch (error) {
      console.error('Error during authentication:', error);
      throw error;
    }
  }