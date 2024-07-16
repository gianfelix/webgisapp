import { Box, Text, Flex } from "@chakra-ui/react";

const LegendPL = () => {
  const landuseSymbols = [
    { name: "Danau/Situ", color: "#019eff" },
    { name: "Gedung/Bangunan", color: "#d88500" },
    { name: "Hutan Rimba", color: "#009819" },
    { name: "Padang Rumput", color: "#b9ff99" },
    { name: "Perkebunan/Kebun", color: "#1fff1b" },
    { name: "Permukiman dan Tempat Kegiatan", color: "#ff9501" },
    { name: "Sawah", color: "#fffaa1", stroke: "#f7f7f7" },
    { name: "Sawah Tadah Hujan", color: "#a1ffe9", stroke: "#f7f7f7" },
    { name: "Semak Belukar", color: "#64822c" },
    { name: "Sungai", color: "#01c0ff" },
    { name: "Tegalan/Ladang", color: "#fbff01" },
  ];

  return (
    <Box
      bg="white"
      opacity={0.9}
      p={4}
      borderRadius="md"
      boxShadow="md"
      position="absolute"
      bottom={4}
      right={4}
      width="240px"
    >
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        LEGEND LANDUSE:
      </Text>
      {landuseSymbols.map((symbol) => (
        <Flex alignItems="center" mb={2} key={symbol.name}>
          <Box
            width="20px"
            height="20px"
            bg={symbol.pattern ? "none" : symbol.color}
            borderRadius="md"
            border={symbol.stroke ? `1px solid ${symbol.stroke}` : "none"}
            bgImage={
              symbol.pattern
                ? `radial-gradient(${symbol.color} 10%, transparent 10%)`
                : "none"
            }
            bgSize="4px 4px"
          />
          <Text ml={2} fontSize="sm">
            {symbol.name}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default LegendPL;
