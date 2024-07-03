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
        }, 3000);
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
    <Box minH="100vh" bgGradient="linear(to-r, teal.500, blue.600)">
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex width="70%" boxShadow="2xl" rounded="lg" bg="white">
          <Box w="60%" pt={10} px={16}>
            <Heading
              as="h2"
              size="xl"
              mb={6}
              textAlign="center"
              color="teal.500"
            >
              Login
            </Heading>
            <VStack spacing={4} align="flex-start">
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  focusBorderColor="teal.500"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  focusBorderColor="teal.500"
                />
              </FormControl>
              <Button
                bgGradient="linear(to-r, teal.500, blue.600)
                "
                width="full"
                onClick={handleLogin}
                size="lg"
              >
                <Text color="white" fontWeight="bold">
                  Login
                </Text>
              </Button>
              <HStack justify="space-between" width="full">
                <Link color="teal.500" href="/forgot-password">
                  Forgot password?
                </Link>
                <Link color="teal.500" href="/register">
                  Create account
                </Link>
              </HStack>
            </VStack>
          </Box>
          <Box
            w="40%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="teal.50"
            roundedRight="lg"
            overflow="hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2023/09/22/07/02/red-8268266_640.jpg"
              // maxHeight={"10%"}
              alt="Login Image"
              // boxSize="90%"
              objectFit="cover"
              borderRadius="lg"
              boxShadow="xl"
              mx="auto"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
