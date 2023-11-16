import { pages } from "./routes.statics";

const Router = ({ selectedMenu }) => {
  const selectedPage = pages.find((page) =>
    Object.keys(page).find((propertyName) => propertyName === selectedMenu)
  );
  return selectedPage[selectedMenu];
};

export default Router;
