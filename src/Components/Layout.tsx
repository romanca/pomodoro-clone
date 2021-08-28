import { Flex } from "theme-ui";
import theme from "../shared/theme";
import LayoutContent from "./layoutContent";

const Layout = () => {
  return (
    <Flex
      sx={{
        width: theme.space[8],
        height: theme.space[12],
        background: theme.colors.danger[1],
        // background: "rgb(70, 142, 145)",
        justifyContent: "center",
      }}
    >
      <LayoutContent />
    </Flex>
  );
};

export default Layout;
