import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('./home'));
const SignIn = React.lazy(() => import('./users/pages/auth/sign-in'));
const SignUp = React.lazy(() => import('./users/pages/auth/sign-up'));
const Dashboard = React.lazy(() => import('./users/layouts/dashboard'));

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      <Route path="/dashboard/*" element={<Suspense fallback={<div>Loading...</div>}>
              <Dashboard/>
            </Suspense>} />
      <Route path="register" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
      <Route path="login" element={<Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
