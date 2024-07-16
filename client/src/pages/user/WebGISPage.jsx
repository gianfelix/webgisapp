import React, { useState } from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import MapContainerComponent from "../../components/MapContainerComponent";
import LegendIndexGR from "../../components/LegendIndexGR";
import LegendPL from "../../components/LegendPL";

const WebGISPage = () => {
  const [showLegendIndexGR, setShowLegendIndexGR] = useState(true);
  const [showLegendPL, setShowLegendPL] = useState(true);
  const wmsUrl = "http://localhost:8080/geoserver/gis/wms";

  const toggleLegendIndexGR = () => {
    setShowLegendIndexGR(!showLegendIndexGR);
  };

  const toggleLegendPL = () => {
    setShowLegendPL(!showLegendPL);
  };

  return (
    <Box maxH="100%" display="flex" flexDirection="column">
      <MapContainerComponent wmsUrl={wmsUrl} />
      <VStack>
        {showLegendIndexGR && <LegendIndexGR />}
        {showLegendPL && <LegendPL />}
      </VStack>
      <VStack position={"absolute"} top={"auto"} left={5} bottom={2}>
        <Button
          colorScheme={showLegendIndexGR ? "gray" : "blue"}
          onClick={toggleLegendIndexGR}
          width="100%"
          variant="solid"
        >
          {showLegendIndexGR
            ? "Hide Legend Hazard Index"
            : "Show Legend Hazard Index"}
        </Button>
        <Button
          colorScheme= {showLegendPL ? "gray" : "blue"}
          onClick={toggleLegendPL}
          width="100%"
          variant="solid"
        >
          {showLegendPL ? "Hide Legend Landuse" : "Show Legend Landuse"}
        </Button>
      </VStack>
    </Box>
  );
};

export default WebGISPage;
