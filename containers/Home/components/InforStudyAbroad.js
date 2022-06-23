import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const arrayInforStudy = [
  "LỘ TRÌNH DU HỌC",
  "LỘ PHÍ DU HỌC",
  "BÍ KÍP CHỌN TRƯỜNG",
  "KHO HỌC BỔNG",
];

export default function InforStudyAbroad() {
  const theme = useTheme();

  const renderCard = () => {
    return arrayInforStudy.map((item, index) => {
      return (
        <Grid key={index} item md={3}>
          <Box
            sx={{
              padding: "10px",
              backgroundColor: theme.palette.common.white,
              transition: "ease 0.5s",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              "&:hover span": {
                color: "white",
              },
            }}
          >
            <Typography
              variant="body1_bold"
              sx={{
                fontFamily: theme.fontName.aguda,
                color: theme.palette.primary.main,
              }}
            >
              {item}
            </Typography>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(185,234,94,1) 5%, rgba(92,198,102,1) 29%, rgba(0,240,233,1) 62%, rgba(0,152,255,1) 100%)",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", paddingY: "2rem" }}>
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.common.white,
            letterSpacing: 5,
            marginBottom: "1rem",
          }}
        >
          THÔNG TIN DU HỌC
        </Typography>
        <Box>
          <Grid container>
            {/* {renderCard()} */}

            <Grid item md={3}>
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: theme.palette.common.white,
                  transition: "ease 0.5s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover span": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="body1_bold"
                  sx={{
                    fontFamily: theme.fontName.aguda,
                    color: theme.palette.primary.main,
                  }}
                >
                  LỘ TRÌNH{" "}
                  <Typography
                    variant="body1_bold"
                    sx={{
                      fontFamily: theme.fontName.aguda,
                      color: theme.palette.primary.light,
                    }}
                  >
                    DU HỌC
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: theme.palette.common.white,
                  transition: "ease 0.5s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover span": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="body1_bold"
                  sx={{
                    fontFamily: theme.fontName.aguda,
                    color: theme.palette.primary.main,
                  }}
                >
                  LỘ TRÌNH{" "}
                  <Typography
                    variant="body1_bold"
                    sx={{
                      fontFamily: theme.fontName.aguda,
                      color: theme.palette.primary.light,
                    }}
                  >
                    DU HỌC
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: theme.palette.common.white,
                  transition: "ease 0.5s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover span": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="body1_bold"
                  sx={{
                    fontFamily: theme.fontName.aguda,
                    color: theme.palette.primary.main,
                  }}
                >
                  LỘ TRÌNH{" "}
                  <Typography
                    variant="body1_bold"
                    sx={{
                      fontFamily: theme.fontName.aguda,
                      color: theme.palette.primary.light,
                    }}
                  >
                    DU HỌC
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Box
                sx={{
                  padding: "10px",
                  backgroundColor: theme.palette.common.white,
                  transition: "ease 0.5s",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                  "&:hover span": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="body1_bold"
                  sx={{
                    fontFamily: theme.fontName.aguda,
                    color: theme.palette.primary.main,
                  }}
                >
                  LỘ TRÌNH{" "}
                  <Typography
                    variant="body1_bold"
                    sx={{
                      fontFamily: theme.fontName.aguda,
                      color: theme.palette.primary.light,
                    }}
                  >
                    DU HỌC
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
