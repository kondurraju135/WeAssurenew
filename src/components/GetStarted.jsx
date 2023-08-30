import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
import imgDetail from "../assets/productImage.png";
import imgDetail2 from "../assets/handBox.png";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"We make it easy for customers"} textAlign={"start"} />
          <CustomTypography>Customers are our key to success</CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Match with the best agent"} textAlign={"start"} />
          <CustomTypography>
            Our verified partner are experts who
            <br />
            are well accomplished in the market.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
