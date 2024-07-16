import { Box, Text, Flex, Divider, HStack } from "@chakra-ui/react";

const LegendIndexGR = () => {
  return (
    <Box
      bg="white"
      opacity={0.9}
      p={4}
      borderRadius="md"
      boxShadow="md"
      position="absolute"
      bottom={105}
      left={4}
      width="235px"
    >
      <Text fontWeight="bold" fontSize={"lg"}>
        LEGEND:
      </Text>

      <HStack alignItems="center">
        <svg width="50" height="10">
          <line
            x1="0"
            y1="5"
            x2="60"
            y2="5"
            stroke="#f551cc"
            strokeWidth="3"
            strokeDasharray="4, 4, 2, 4, 2, 4, 2, 4, 2, 4"
          />
        </svg>
        <Text fontSize="sm">Village Boundary</Text>
      </HStack>

      <HStack alignItems="center">
        <svg width="50" height="10">
          <line
            x1="0"
            y1="5"
            x2="60"
            y2="5"
            stroke="#ed51f5"
            strokeWidth="3"
            strokeDasharray="4, 4, 2, 4, 2, 4, 2, 4"
          />
        </svg>
        <Text fontSize="sm">District Boundary</Text>
      </HStack>

      <HStack alignItems="center" mb={1}>
        <svg width="50" height="10">
          <line
            x1="0"
            y1="5"
            x2="60"
            y2="5"
            stroke="#c251f5"
            strokeWidth="3"
            strokeDasharray="4, 4, 2, 4, 2, 4"
          />
        </svg>
        <Text fontSize="sm">Regency Boundary</Text>
      </HStack>

      <Text fontSize="sm" fontWeight={"bold"}>
        Hazard Index Value
      </Text>

      <Flex alignItems="center">
        <Text fontSize="sm">Min: 0</Text>
        <Box
          bgGradient="linear(to-l, red, yellow, green)"
          height="12px"
          width="110px"
          mx={1}
        />
        <Text fontSize="sm">Max: 1</Text>
      </Flex>
    </Box>
  );
};

export default LegendIndexGR;
