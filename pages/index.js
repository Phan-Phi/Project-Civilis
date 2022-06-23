import { transformUrl, prefetchData } from "../libs/";
import Home from "../containers/Home/Home";

const PageHome = ({ ...props }) => {
  return <Home />;
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
//         destination: "",
//         permanent: false,
//       },
//     };
//   }
// }
