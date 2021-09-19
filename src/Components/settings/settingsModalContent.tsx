import { Box, Button, Flex } from "@theme-ui/components";
import React from "react";
import { useModal } from "../../Providers/ModalProvider";
import theme from "../../shared/theme";
import SettingsInputs from "./settingsInputs";

const SettingsModalContent = () => {
  const { closeModalDialog } = useModal();
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      const el = e.target;

      if (el instanceof Node && ref.current && !ref.current.contains(el)) {
        closeModalDialog();
      }
    },
    [closeModalDialog]
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
          onClick={closeModalDialog}
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
      <SettingsInputs />
      <Box
        style={{
          padding: "14px 20px",
          textAlign: "right",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: "rgb(239, 239, 239)",
        }}
      >
        <Button
          onClick={closeModalDialog}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: 4,
            cursor: "pointer",
            boxShadow: "rgb(0 0 0 / 20%) 0px 2px 2px",
            color: "white",
            opacity: 0.9,
            fontSize: 14,
            padding: "8px 12px",
            minWidth: 70,
            backgroundColor: "rgb(34, 34, 34)",
            border: "2px solid rgb(34, 34, 34)",
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
