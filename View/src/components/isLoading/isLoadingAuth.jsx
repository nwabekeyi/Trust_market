import "./isLoading.css"
import NavWrapper from "../users/layouts/navWrapper";

const isLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Trust Market!</h1>
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <p className="text-lg">Loading...</p>
    </div>
  );
}

const Mainloader = NavWrapper(isLoading);

const isLoadingAuth = () => {
  return(
    <Mainloader />
  )
}

export default isLoadingAuth;
