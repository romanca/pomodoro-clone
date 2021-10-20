import { Box, Button, Flex } from "@theme-ui/components";
import React from "react";
import { useModal } from "../../Providers/ModalProvider";
import theme from "../../shared/theme";
import SettingsInputs from "./settingsInputs";
import { useSelector, useDispatch } from "react-redux";
import AutoBreakStart from "./autoBreakStart";
import AlarmSound from "./alarmSound";
import { pomodoroCounterActions } from "../../redux/actions/actions";

const SettingsModalContent = () => {
  const time = useSelector((state: RootState) => state.pomodoroCounter);
  const [values, setValues] = React.useState(time);
  const dispatch = useDispatch();
  const { closeModalDialog } = useModal();
  const ref = React.useRef<HTMLDivElement>(null);

  const bootstrap = React.useCallback(() => {
    setValues(time);
  }, [time]);

  React.useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };

  const handleSubmitTimes = React.useCallback(
    (values: TState) => {
      if (values.count === 0 || values.short === 0 || values.long === 0) {
      } else {
        dispatch(pomodoroCounterActions.addPomodoroTime(values));
        closeModalDialog();
      }
    },
    [closeModalDialog, dispatch]
  );

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      const el = e.target;

      if (el instanceof Node && ref.current && !ref.current.contains(el)) {
        closeModalDialog();
        handleSubmitTimes(values);
      }
    },
    [closeModalDialog, handleSubmitTimes, values]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Box ref={ref}>
      <Flex
        sx={{
          width: theme.space[8],
          justifyContent: "space-between",
          marginBottom: theme.space[3],
          marginTop: theme.space[10],
          fontFamily: "ArialRoundedMTBold",
        }}
      >
        <Box
          sx={{
            fontSize: theme.space[3],
            color: "rgb(187, 187, 187)",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          TIMER SETTING
        </Box>
        <Box
          onClick={() => handleSubmitTimes(values)}
          sx={{
            cursor: "pointer",
            fontSize: theme.space[37],
            width: theme.space[38],
            height: theme.space[39],
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              transform: "rotate(45deg)",
              color: "black",
              marginLeft: theme.space[40],
              marginTop: theme.space[41],
              opacity: theme.space[42],
              zIndex: theme.space[43],
            }}
          >
            +
          </Box>
        </Box>
      </Flex>
      <SettingsInputs values={values} onChange={handleInputChange} />
      <AutoBreakStart />
      <AlarmSound />
      <Box
        style={{
          borderTop: `${theme.space[36]} solid ${theme.colors.danger[2]}`,
          textAlign: "right",
          width: theme.space[8],
        }}
      >
        <Button
          onClick={() => handleSubmitTimes(values)}
          sx={{
            marginTop: theme.space[33],
            marginBottom: theme.space[10],
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: theme.borderRadiuss[0],
            cursor: "pointer",
            color: "white",
            opacity: theme.opacities[2],
            fontSize: theme.space[33],
            minWidth: theme.space[11],
            backgroundColor: theme.colors.greys[3],
            border: `${theme.borders[1]} ${theme.colors.greys[3]}`,
            display: "inline-block",
          }}
        >
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsModalContent;
