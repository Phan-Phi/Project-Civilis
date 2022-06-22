import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Image } from "../../HOC";

export default function CardStudy({ data }) {
  console.log("data", data);
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ height: "30vh" }}>
        <Image
          {...{
            src: "/img/imgimg.jpeg",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          padding: "1.5rem",
          transition: "all 0.5s",
          "&:hover ": {
            backgroundColor: theme.palette.primary.main,
          },
          "&:hover .icon": {
            color: theme.palette.common.white,
          },
          "&:hover .MuiTypography-root": {
            color: theme.palette.common.white,
          },
        }}
      >
        <Typography
          variant="body1_bold"
          sx={{ color: theme.palette.primary.main }}
        >
          {data.name}
        </Typography>

        <Stack direction="row" spacing={0.5} sx={{ marginBottom: "1rem" }}>
          <CalendarMonthIcon sx={{ marginBottom: "1rem" }} className="icon" />
          <Typography>06-07-2020</Typography>
        </Stack>

        <Typography variant="body2" sx={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, voluptatem blanditiis repellendus mollitia eum
          accusamus hic illum facilis dicta commodi?
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          backgroundColor: theme.palette.primary.main,
          padding: "0.3rem 2rem",
          borderRadius: "0 0 2rem 0",
        }}
      >
        <Typography sx={{ color: theme.palette.common.white }}>
          {data.title}
        </Typography>
      </Box>
    </Box>
  );
}
