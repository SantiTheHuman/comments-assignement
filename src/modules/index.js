import Comments from "./Comments";
//~~ All modules would be imported here

const modules = [
  {
    routeProps: {
      path: "/Map",
      component: () => <h2>Map</h2>,
    },
    name: "Map",
  },
  {
    routeProps: {
      path: "/Tasks",
      component: () => <h2>Tasks</h2>,
    },
    name: "Tasks",
  },
  {
    routeProps: {
      path: "/Dashboard",
      component: () => <h2>Dashboard</h2>,
    },
    name: "Dashboard",
  },
  Comments, //~~ Real Comments module
  {
    routeProps: {
      path: "/Admin",
      component: () => <h2>Admin</h2>,
    },
    name: "Admin",
  },
];

export default modules;
