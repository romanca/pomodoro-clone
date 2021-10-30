import { useSelector } from "react-redux";
import { Flex, Box } from "theme-ui";
import theme from "../shared/theme";
import Counter from "./Counter";
import Header from "./header";

const Layout = () => {
  const valueSelect = useSelector(
    (state: RootState) => state.pomodoroCounter.counter
  );
  const rawCounterData = useSelector(
    (state: RootState) => state.pomodoroCounter.data
  );

  const switchColors =
    valueSelect === rawCounterData[0].value
      ? theme.colors.danger[1]
      : valueSelect === rawCounterData[1].value
      ? theme.colors.success[2]
      : valueSelect === rawCounterData[2].value
      ? theme.colors.primary[1]
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
      <Box
        sx={{
          width: theme.space[13],
          "@media screen and (max-width: 768px)": {
            width: theme.space[8],
            padding: "0px 10px 0px 10px",
          },
        }}
      >
        <Header />
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderTop: `${theme.borders[0]} solid ${theme.colors.blacks[12]}`,
          }}
        >
          <Counter />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Layout;
