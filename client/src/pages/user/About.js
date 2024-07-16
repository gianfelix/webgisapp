import { Box, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        bg="gray.100"
        minHeight="83.7vh"
        display="flex"
        flexDirection="column"
        p={8}
      >
        <VStack
          spacing={5}
          maxW="800px"
          align="center"
          bg="white"
          p={10}
          borderRadius="md"
          shadow="lg"
        >
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="#033c6e"
            textAlign="center"
            p={5}
          >
            This website is the Kudus Disaster Information System (SIKDUS),
            designed to disseminate disaster information ranging from danger,
            vulnerability, capacity, to disaster risk. This website can also
            accommodate reports from residents quickly and help respond swiftly
            to disaster emergencies.
          </Text>

          <Divider borderColor="#DF4C73" borderWidth="2px" />

          <Text
            fontSize="xl"
            color="#033c6e"
            textAlign="center"
            p={2}
            fontStyle="italic"
          >
            Developed by Gian Felix Ramadan
          </Text>

          <Divider borderColor="#DF4C73" borderWidth="2px" />

          <Box textAlign="center">
            <Heading
              as="h2"
              size="lg"
              fontWeight="bold"
              color="#DF4C73"
              textAlign="center"
              mb={4}
            >
              Our Mission
            </Heading>
            <Text fontSize="xl" color="#033c6e" textAlign="center" p={4}>
              To provide accurate and timely disaster information to the people
              of Kudus, enhancing community preparedness and facilitating rapid
              emergency response.
            </Text>
          </Box>

          <Divider borderColor="#DF4C73" borderWidth="2px" />

          <Box textAlign="center">
            <Heading
              as="h2"
              size="lg"
              fontWeight="bold"
              color="#DF4C73"
              textAlign="center"
              mb={4}
            >
              Our Goal
            </Heading>
            <Text fontSize="xl" color="#033c6e" textAlign="center" p={4}>
              Our goal is to create a resilient community in Kudus by empowering
              residents with the information and tools needed to effectively
              respond to and recover from disasters.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default About;
