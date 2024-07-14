import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login";
import LandingPageUser from "./pages/user/LandingPageUser";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import VerificationPage from "./pages/user/VerificationPage";
import NavbarNotLogin from "./components/NavbarNotLogin";
import WebGISPage from "./pages/user/WebGISPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <ChakraProvider>
      <Box position={"fixed"} width={"100%"} zIndex={4}>
        {isLoggedIn ? <Navbar /> : <NavbarNotLogin />}
      </Box>
      <Box pt="58px">
        {/* Adjust padding top to avoid content overlapping with navbar */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPageUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth/verify/:token" element={<VerificationPage />} />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/webGIS" element={<WebGISPage />} />
          </Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
