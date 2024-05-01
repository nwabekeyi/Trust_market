import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('./home'));

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
