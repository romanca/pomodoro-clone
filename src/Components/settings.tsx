import { Box, Button, Flex } from "@theme-ui/components";
import React from "react";
import theme from "../shared/theme";
import Icon from "./Icon";

const Settings = () => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: theme.borderRadiuss[8],
          cursor: "pointer",
          opacity: theme.radii[8],
          background: "none rgba(255, 255, 255, 0.2)",
          fontSize: theme.fontSizes[0],
          minWidth: theme.space[11],
          border: "none",
          outline: "none",
          color: theme.colors.whites[8],
          fontWeight: theme.fontWeights[5],
        }}
      >
        <Icon
          name="settings"
          style={{
            marginRight: theme.space[0],
            fontSize: theme.fontSizes[2],
          }}
        />
        <Box>Settings</Box>
      </Button>
    </Flex>
  );
};

export default Settings;
