import { useEffect, useState } from "react";
import {
  Box,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Box>
      <Box
        h={"58px"}
        bg="#FFFFFF"
        color="#DF4C25"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        px={5}
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        zIndex={1000000}
      >
        <Box>
          <Link href="/" color="#DF4C25">
            Home
          </Link>
        </Box>
        <Box>
          <Link href="/about" color="#DF4C25">
            About Us
          </Link>
        </Box>
        <Box>
          <Link href="/report" color="#DF4C25">
            Report a Disaster
          </Link>
        </Box>
        <Box>
          <Link href="/webGIS" color="#DF4C25">
            WebGIS
          </Link>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg={"#FFFFFF"}
              color={"#DF4C25"}
              _hover={{ bg: "#DF4C25", color: "#FFFFFF" }}
            >
              Welcome, {username}
            </MenuButton>
            <MenuList
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.5)"}
            >
              <MenuItem
                onClick={() => (window.location.href = "/profile")}
                _hover={{ bg: "#DF4C25", color: "#FFFFFF" }}
                px={10}
                py={0}
                borderRadius={"10px"}
                bg={"#FFFFFF"}
              >
                Edit Profile
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                _hover={{ bg: "#DF4C25", color: "#FFFFFF" }}
                px={10}
                py={0}
                borderRadius={"10px"}
                bg={"#FFFFFF"}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
