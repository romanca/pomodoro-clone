import { Box, Flex } from "@theme-ui/components";
import React from "react";
import { useModal } from "../../Providers/ModalProvider";
import theme from "../../shared/theme";
import SettingsInputs from "./settingsInputs";

const SettingsModalContent = () => {
  const { closeModalDialog } = useModal();
  return (
    <Box>
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
    </Box>
  );
};

export default SettingsModalContent;
