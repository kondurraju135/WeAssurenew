import React, { useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from "./Title";
import Paragraph from "./Paragraph";
import imageDetail1 from "../assets/humanIdea.png";
import imageDetail2 from "../assets/workPlace.png";
import imageDetail3 from "../assets/productDesign.png";
import imageDetail4 from "../assets/openBox.png";
import imageDetail5 from "../assets/endProduct.png";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      src: imageDetail1,
    },
    {
      alt: "image2",
      src: imageDetail2,
    },
    {
      alt: "image3",
      src: imageDetail3,
    },
    {
      alt: "image4",
      src: imageDetail4,
    },
    {
      alt: "image5",
      src: imageDetail5,
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.src} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"Plans and perspectives"} textAlign={"center"} />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{
            paddingTop: 1,
          }}
        >
          Gallery
        </Typography>
        <Paragraph
          text={
            "We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us."
          }
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>

      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
