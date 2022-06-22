import { HomePage } from "../containers";
import { HOME_PAGE, PAGES, PARTNER, BLOG_DETAIL } from "../apis";

import { transformUrl, prefetchData } from "../libs/";
import { Box } from "@mui/material";

const Home = ({ ...props }) => {
  return <Box>sdfsfs</Box>;
};

export default Home;

// export async function getServerSideProps({ params }) {
//   try {
//     const urls = [
//       transformUrl(PAGES, {
//         type: HOME_PAGE,
//         fields: "*",
//       }),
//       transformUrl(PARTNER, {
//         fields: "*",
//         is_on_homepage: true,
//         limit: 9,
//       }),
//       transformUrl(PAGES, {
//         type: BLOG_DETAIL,
//         fields: "*",
//         is_on_homepage: true,
//         limit: 3,
//       }),
//     ];

//     const { resList, fallback } = await prefetchData(urls);

//     return {
//       props: {
//         initData: resList,
//         fallback,
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         destination: "/404",
//         permanent: false,
//       },
//     };
//   }
// }
