import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ProtectedRoute = ({ isLoggedIn }) => {
  const toast = useToast();
  const [showNavigate, setShowNavigate] = React.useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => setShowNavigate(true), 1);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);


  if (showNavigate) {
    toast({
      title: "Access Denied.",
      description: "You must be logged in to access webGIS Page. Please login.",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
