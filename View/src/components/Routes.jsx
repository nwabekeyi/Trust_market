import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy-loaded components
const Home = React.lazy(() => import('./home'));
const SignIn = React.lazy(() => import('./users/pages/auth/sign-in'));
const SignUp = React.lazy(() => import('./users/pages/auth/sign-up'));
const Dashboard = React.lazy(() => import('./users/layouts/dashboard'));
const PreAuthSingIn = React.lazy(() => import('./users/pages/auth/preSignIn'));
const PreAuthRegister = React.lazy(() => import('./users/pages/auth/preRegistration'));
const AuthIsloading =  React.lazy(() => import('./isLoading/isLoadingAuth'));

console.log(AuthIsloading)
const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<AuthIsloading/>}>
              <Home />
            </Suspense>
          }
        />
      <Route path="/dashboard/*" element={<Suspense fallback={AuthIsloading}>
              <Dashboard/>
            </Suspense>} />
      <Route path="/auth2/buyer-register" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
      <Route path="/auth2/seller-register" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
      <Route path="auth1/buyer-sign-in" element={<Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>} />
            <Route path="auth1/seller-sign-in" element={<Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>} />
      <Route path="auth1" element={<Suspense fallback={<div>Loading...</div>}>
              <PreAuthSingIn />
            </Suspense>} />
            <Route path="auth2" element={<Suspense fallback={<div>Loading...</div>}>
              <PreAuthRegister />
            </Suspense>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
