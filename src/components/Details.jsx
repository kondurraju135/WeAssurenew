import React from "react";
import { Stack } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import FooterTitle from "./Footer/FooterTitle";

const Details = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Interested to buy our product?"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to buy our product, contact us we will call you \
                Shortly to fulfill you requirements."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Title text={"Address"} textAlign={"center"} />
      <FooterTitle text={"15th Louis St, london 92382, eng"} />
      <FooterTitle text={"25 999-345-10800"} />
      <FooterTitle text={"info@weassure.com"} />
    </Stack>
  );
};

export default Details;
