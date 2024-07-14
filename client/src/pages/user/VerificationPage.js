import { Box, Button, Heading, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const url = window.location.href.split("/");
  const token = url[url.length - 1];
  const navigate = useNavigate();
  const Toast = useToast();
  const [submit, setSubmit] = useState(false);

  const handleSuccessVerify = () => {
    Toast({
      title: "Success",
      description: "Your account has been verified.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleErrorVerify = () => {
    Toast({
      title: "Error",
      description: "Your account has not been verified.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleVerify = async () => {
    setSubmit(true);
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/auth/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        handleSuccessVerify();
        navigate("/login");
      }
    } catch (error) {
      handleErrorVerify();
      console.log(error);
      setSubmit(false);
    }
  };

  return (
    <Box
      pt={"58px"}
      minH="100vh"
      d="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.400, blue.500)"
    >
      <Box
        maxW="md"
        w="full"
        bg="white"
        p={8}
        boxShadow="lg"
        rounded="lg"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={6} color="teal.500">
          Verification Page
        </Heading>
        <Button
          colorScheme="teal"
          onClick={handleVerify}
          isLoading={submit}
          loadingText="Verifying..."
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default VerificationPage;
