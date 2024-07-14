import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import css

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
      <Box>
        <Image
          src="https://plus.unsplash.com/premium_photo-1663090922856-42eb12756351?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slide 1"
          width="100%"
          height="600"
          objectFit="cover"
        />
        <p className="legend">Slide 1</p>
      </Box>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slide 2"
          width="100%"
          height="600"
          objectFit="cover"
        />
        <p className="legend">Slide 2</p>
      </Box>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slide 3"
          width="100%"
          height="600"
          objectFit="cover"
        />
        <p className="legend">Slide 3</p>
      </Box>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slide 4"
          width="100%"
          height="600"
          objectFit="cover"
        />
        <p className="legend">Slide 4</p>
      </Box>
    </Carousel>
  );
};

export default CarouselComponent;