import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isSignedIn } from "../../firebase/firebaseConfig";

const userEnum = {
  isLoading: 0,
  isLoggedIn: 1,
  isNotLoggedIn: 2,
};

const PrivateRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(userEnum.isLoading);

  useEffect(() => {
    const res = isSignedIn();
    if (res) {
      setIsLoggedIn(userEnum.isLoggedIn);
    } else {
      setIsLoggedIn(userEnum.isNotLoggedIn);
    }
  }, []);

  return isLoggedIn === 0 ? (
    <>loading...</>
  ) : isLoggedIn === 1 ? (
    <Outlet />
  ) : isLoggedIn === 2 ? (
    <Navigate to="/signin" />
  ) : null;
};

export default PrivateRoutes;
