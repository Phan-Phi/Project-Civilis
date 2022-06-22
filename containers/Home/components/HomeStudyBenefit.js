import { Box, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardStudy from "../../../components/Card/CardStudy";
import Title from "../../../components/Title/Title";

const arrayCardTour = [
  { title: "DU HỌC", name: "Có nên đi du học hàn quốc hay không?" },
  { title: "VIỆC LÀM", name: "Chính sách làm việc của du học sinh" },
  { title: "TIN TỨC", name: "Ngày 1-6 Hàn Quốc chính thức mở cửa" },
];

export default function HomeStudyBenefit() {
  const theme = useTheme();

  const renderCardStudy = () => {
    return arrayCardTour.map((item, index) => {
      return (
        <Grid item md={4} key={index}>
          <CardStudy data={item} />
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ paddingY: "2.5rem" }}>
      <Title title="We have the best choice" />

      <Container maxWidth="lg">
        <Grid container spacing={7}>
          {renderCardStudy()}
        </Grid>
      </Container>
    </Box>
  );
}
