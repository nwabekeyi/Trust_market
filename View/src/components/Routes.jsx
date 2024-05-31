import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DashboardHome  from './users/pages/dashboard/home';


// Lazy-loaded components
const MainHome = React.lazy(() => import('./home'));
const SignIn = React.lazy(() => import('./users/pages/auth/sign-in'));
const SignUp = React.lazy(() => import('./users/pages/auth/sign-up'));
const Dashboard = React.lazy(() => import('./users/layouts/dashboard'));
const PreAuthSingIn = React.lazy(() => import('./users/pages/auth/preSignIn'));
const PreAuthRegister = React.lazy(() => import('./users/pages/auth/preRegistration'));
const AuthIsloading =  React.lazy(() => import('./isLoading/isLoadingAuth'));
const DashboardHome =  React.lazy(() => import('./users/pages/dashboard/home'))


const MyRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/dashboard/home" element={<Suspense fallback={<AuthIsloading/>}>
              <DashboardHome />
            </Suspense>
          }
        />       
        <Route exact path="/" element={<Suspense fallback={<AuthIsloading/>}>
              <MainHome />
            </Suspense>
          }
        />
      <Route path="/dashboard" element={<Suspense fallback={AuthIsloading}>
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
