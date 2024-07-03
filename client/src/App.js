import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ChakraProvider, Switch } from "@chakra-ui/react";
import LandingPageUser from "./pages/user/LandingPageUser";


function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPageUser />} />

        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
