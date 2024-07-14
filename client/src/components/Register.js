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
  HStack,
  Link,
  Text,
  Flex,
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

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/",
        {
          username,
          email,
          password,
        }
      );

      if (response.data.success) {
        toast({
          title: "Registration successful.",
          status: "success",
          duration: 1000,
          position: "top",
          isClosable: true,
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        toast({
          title: "Registration Failed.",
          description: response.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Unable to Register.",
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
        <Box
          maxW="md"
          w="full"
          bg={colors.color4}
          p={8}
          boxShadow="lg"
          rounded="lg"
          mx="auto"
        >
          <Heading
            as="h2"
            size="xl"
            mb={6}
            textAlign="center"
            color={colors.color3}
          >
            Register
          </Heading>
          <VStack spacing={4} align="flex-start">
            <FormControl id="username" isRequired>
              <FormLabel color={colors.color3}>Username</FormLabel>
              <Input
                borderWidth="1px"
                borderColor={colors.color2}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                focusBorderColor={colors.color3}
                color={colors.color3}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel color={colors.color3}>Email</FormLabel>
              <Input
                borderWidth="1px"
                borderColor={colors.color2}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                focusBorderColor={colors.color3}
                color={colors.color3}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={colors.color3}>Password</FormLabel>
              <Input
                borderWidth="1px"
                borderColor={colors.color2}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                focusBorderColor={colors.color3}
                color={colors.color3}
              />
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel color={colors.color3}>Confirm Password</FormLabel>
              <Input
                borderWidth="1px"
                borderColor={colors.color2}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                _placeholder={{ color: colors.color2 }}
                  _hover={{ borderColor: colors.color3 }}
                focusBorderColor={colors.color3}
                color={colors.color3}
              />
            </FormControl>
            <Button
              bg={colors.color5}
              width="full"
              onClick={handleRegister}
              size="lg"
              _hover={{ bg: colors.color6 }}
            >
              <Text color={colors.color4} fontWeight="bold">
                Register
              </Text>
            </Button>
            <HStack justify="space-between" width="full">
              <Link color={colors.color3} href="/login">
                Already have an account? Login
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
