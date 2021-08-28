import { Flex } from "theme-ui";
import useToggleContent from "../hooks/useToggleContent";
import theme from "../shared/theme";
import LayoutContent from "./layoutContent";

const Layout = () => {
  const { valueSelect, toggleContent, switchContent } = useToggleContent();

  const switchColors =
    valueSelect === "pomodoroCounter"
      ? theme.colors.danger[1]
      : valueSelect === "shortBreakCounter"
      ? "rgb(70, 142, 145)"
      : valueSelect === "longBreakCounter"
      ? "rgb(67, 126, 168)"
      : theme.colors.danger[1];

  return (
    <Flex
      sx={{
        width: theme.space[8],
        height: theme.space[12],
        justifyContent: "center",
        background: switchColors,
      }}
    >
      <LayoutContent
        valueSelect={valueSelect}
        toggleContent={toggleContent}
        switchContent={switchContent}
      />
    </Flex>
  );
};

export default Layout;
