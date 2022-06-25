import Router from "next/router";

import queryString from "query-string";

const updatePathname = ({ pathname, query }) => {
  let params = {
    ...Router.query,
    ...query,
  };

  const pathnameWithParams = `${pathname}?${queryString.stringify(params)}`;
  Router.push(pathnameWithParams, pathnameWithParams, {
    shallow: true,
  });
};

export default updatePathname;
