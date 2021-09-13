import { Box, Button, Flex } from "@theme-ui/components";
import React from "react";
import { useModal } from "../../Providers/ModalProvider";
import Icon from "../Icon";

const SettingsModalContent = () => {
  const { closeModalDialog } = useModal();
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 16,
        marginTop: 10,
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      <Box
        sx={{
          fontSize: 16,
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
          fontSize: 35,
          width: 30,
          height: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            transform: "rotate(45deg)",
            color: "black",
            marginLeft: 15,
            marginTop: -15,
            opacity: 0.2,
            zIndex: 2147483647,
          }}
        >
          +
        </Box>
      </Box>
    </Flex>
  );
};

export default SettingsModalContent;
