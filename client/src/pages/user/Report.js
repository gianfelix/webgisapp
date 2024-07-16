import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

const Report = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setCoordinates({
          x: e.latlng.lat,
          y: e.latlng.lng,
        });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return coordinates.x !== 0 && coordinates.y !== 0 ? (
      <Marker
        position={[coordinates.x, coordinates.y]}
        icon={
          new L.Icon({
            iconUrl:
              "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      />
    ) : null;
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg="#033c6e"
      minHeight="93.7vh"
      display="flex"
      flexDirection="column"
      py={5}
    >
      <Heading as="h1" size="xl" fontWeight="bold" color="white" mb={8}>
         Form Report
      </Heading>
      <Box
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        width="70%"
        maxW="800px"
      >
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Fullname</FormLabel>
            <Input placeholder="Enter name here" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Report Date</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Report Time</FormLabel>
            <Input type="time" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Type of Disaster</FormLabel>
            <Select placeholder="Select Disaster">
              <option value="gempa">Gempa Bumi</option>
              <option value="banjir">Banjir</option>
              <option value="banjir_bandang">Banjir Bandang</option>
              <option value="kebakaran">Kebakaran Hutan dan Lahan</option>
              <option value="kekeringan">Kekeringan</option>
              <option value="cuaca_ekstrim">Cuaca Ekstrim</option>
              <option value="tanah_longsor">Tanah Longsor</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Village</FormLabel>
            <Input placeholder="Desa" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>District</FormLabel>
            <Input placeholder="Kecamatan" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location of Disaster </FormLabel>
            <Text>swipe, drag, and left click to select location</Text>
            <Box height="300px" width="100%">
              <MapContainer
                center={[-6.812539, 110.862339]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
              </MapContainer>
            </Box>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Coordinate X</FormLabel>
            <Input value={coordinates.x} readOnly />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Coordinate Y</FormLabel>
            <Input value={coordinates.y} readOnly />
          </FormControl>
          <Button colorScheme="blue" size="lg" mt={4}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Report;
