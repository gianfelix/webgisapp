import { Box, Heading } from "@chakra-ui/react";

const EditProfie = () => {
  return (
    <>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        // pt={8}
        bg="#033c6e"
        minHeight="93.7vh"
        display="flex"
      >
        <Heading as="h1" size="xl" fontWeight="bold" color="white">
          Edit Profile
        </Heading>
      </Box>
    </>
  );
};

export default EditProfie;
