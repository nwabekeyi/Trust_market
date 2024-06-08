import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// Lazy-loaded components
const MainHome = React.lazy(() => import('./home'));
const SignIn = React.lazy(() => import('./users/pages/auth/sign-in'));
const SignUp = React.lazy(() => import('./users/pages/auth/sign-up'));
const Dashboard = React.lazy(() => import('./users/layouts/dashboard'));
const PreAuthSingIn = React.lazy(() => import('./users/pages/auth/preSignIn'));
const PreAuthRegister = React.lazy(() => import('./users/pages/auth/preRegistration'));
const AuthIsloading =  React.lazy(() => import('./isLoading/isLoadingAuth'));
const DashboardHome =  React.lazy(() => import('./users/pages/dashboard/home'))
const ContactHome =  React.lazy(() => import('./home/ContactHome'))
const AboutUs =  React.lazy(() => import('./home/AboutUs'))
const Category =  React.lazy(() => import('./home/categoriesPage'))



const MyRoutes = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('accessToken');
    console.log(token)
    if(token){
      setIsLoggedIn(true);
    }

  }, [])
  return (
    <Router>
      <Routes>
      <Route exact path="/dashboard/home" element={<Suspense fallback={<AuthIsloading/>}>
              <DashboardHome />
            </Suspense>
          }
        />
        <Route exact path="/" element={<Suspense fallback={<AuthIsloading/>}>
              {isLoggedIn ? <Dashboard/> : <MainHome />}
            </Suspense>
          }
        />
        <Route exact path="/home" element={isLoggedIn ? <Dashboard/> : <MainHome/>} />

      <Route path="/dashboard" element={<Suspense fallback={AuthIsloading}>
              <Dashboard/>
            </Suspense>} />
      <Route path="/auth2/buyer-register" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
      <Route path="/auth2/seller-register" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
      <Route path="/auth1/buyer-sign-in" element={<Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>} />
            <Route path="/auth1/seller-sign-in" element={<Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>} />
      <Route path="/auth1" element={<Suspense fallback={<div>Loading...</div>}>
              <PreAuthSingIn />
            </Suspense>} />
            <Route path="/auth2" element={<Suspense fallback={<div>Loading...</div>}>
              <PreAuthRegister />
            </Suspense>} />
            <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}>
              <ContactHome />
            </Suspense>} />
            <Route path="/categories" element={<Suspense fallback={<div>Loading...</div>}>
              <Category />
            </Suspense>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
