import React from "react";
import CommentsModule from "./Container";

export default {
  routeProps: {
    path: "/Comments",
    component: () => <CommentsModule />,
  },
  name: "Comments",
};
