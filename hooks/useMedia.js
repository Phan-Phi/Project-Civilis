import { useTheme, useMediaQuery } from "@mui/material";

const useMedia = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // 900px >
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm")); //600px >
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // 600px <
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // 900px <

  return {
    isMdUp,
    isSmUp,
    isSmDown,
    isMdDown,
  };
};

export default useMedia;
