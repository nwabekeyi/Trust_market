import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const HomePage = React.lazy(() => import('./home/HomePage'));

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
