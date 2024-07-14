// LandingPageUser.js
import React, { useRef } from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import CarouselComponent from "../../components/CarouselComponent";

const LandingPageUser = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        // minHeight="100vh"
        // color="red"
      >
        <CarouselComponent />
      </Box>

      <Box
        bg="#033c6e"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <VStack spacing={6} textAlign="center" maxWidth="600px">
          <Heading as="h1" size="2xl" fontWeight="bold" color="white">
            Welcome to Our Website
          </Heading>
          <Text fontSize="xl" color="white">
            Discover amazing content and connect with our community.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            variant="solid"
            onClick={scrollToContent}
          >
            Get Started
          </Button>
        </VStack>
      </Box>

      <Box
        ref={contentRef}
        bg="gray.50"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <VStack spacing={6} textAlign="center" maxWidth="800px">
          <Heading as="h2" size="xl" fontWeight="bold">
            Explore Our Content
          </Heading>
          <Text fontSize="lg">
            Here you can add more detailed information about your content,
            features, or anything else you'd like to share with your users.
          </Text>
          {/* Add more content or components as needed */}
        </VStack>
      </Box>
    </>
  );
};

export default LandingPageUser;
