import { Box, Link, Text } from "@chakra-ui/react";

const NavbarNotLogin = () => {
  return (
    <>
      <Box>
        <Box
          h={"58px"}
          bg="#FFFFFF"
          color="#DF4C25"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          px={20}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
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
            <Link href="/webGIS" color="#DF4C25">
              WebGIS
            </Link>
          </Box>
          <Box>
            <Link href="/login" color="#DF4C25">
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavbarNotLogin;
