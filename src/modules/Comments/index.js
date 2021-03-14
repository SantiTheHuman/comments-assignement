import React from "react";
import Comments from "./Comments";

export default {
  routeProps: {
    path: "/Comments",
    component: () => <Comments />,
  },
  name: "Comments",
};
