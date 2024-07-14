import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  useToast,
  Text,
  HStack,
  Link,
  Flex,
  Image,
} from "@chakra-ui/react";
import axios from "axios";

const colors = {
  color1: "#E2F0F9",
  color2: "#B0DDE4",
  color3: "#286FB4",
  color4: "#FFFFFF",
  color5: "#DF4C73",
  color6: "#DF4C25",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        toast({
          title: "Login successful.",
          status: "success",
          duration: 1000,
          position: "top",
          isClosable: true,
        });
        localStorage.setItem("token", response.data.token);

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        toast({
          title: "Login Failed.",
          description: response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Unable to Login.",
        description: "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient={`linear(to-r, ${colors.color2}, ${colors.color3})`}
    >
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction={{ base: "column", md: "row" }}
          width="90%"
          maxWidth="1000px"
          boxShadow="2xl"
          rounded="lg"
          bg={colors.color4}
          overflow="hidden"
        >
          <Box w={{ base: "100%", md: "70%" }} p={10}>
            <Heading
              pt={10}
              as="h2"
              size="xl"
              mb={6}
              textAlign="center"
              color={colors.color3}
            >
              Login
            </Heading>
            <VStack spacing={4} align="flex-start">
              <FormControl id="username" isRequired>
                <FormLabel color={colors.color3}>Username</FormLabel>
                <Input
                  color={colors.color3}
                  borderWidth="1px"
                  borderColor={colors.color2}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  focusBorderColor={colors.color3}
                  _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color={colors.color3}>Password</FormLabel>
                <Input
                  color={colors.color3}
                  borderWidth="1px"
                  borderColor={colors.color2}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  focusBorderColor={colors.color3}
                  _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                />
              </FormControl>
              <Button
                bg={colors.color5}
                width="full"
                onClick={handleLogin}
                size="lg"
                _hover={{ bg: colors.color6 }}
              >
                <Text color={colors.color4} fontWeight="bold">
                  Login
                </Text>
              </Button>
              <HStack justify="space-between" width="full">
                <Link color={colors.color3} href="/forgot-password">
                  Forgot password?
                </Link>
                <Link color={colors.color3} href="/register">
                  Create account
                </Link>
              </HStack>
            </VStack>
          </Box>
          <Box
            w={{ base: "100%", md: "30%" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={colors.color1}
            roundedRight={{ md: "lg" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1523539693385-e5e891eb4465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Login Image"
              objectFit="cover"
              borderRadius="lg"
              boxShadow="xl"
              mx="auto"
              maxH="400px"
              maxW="100%"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
