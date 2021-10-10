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
        style={{
          width: theme.space[13],
        }}
      >
        <Header />
        <Box
          sx={{
            margin: "auto",
            borderTop: `${theme.borders[0]} solid ${theme.colors.blacks[12]}`,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: theme.space[8],
            }}
          >
            <Counter />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
