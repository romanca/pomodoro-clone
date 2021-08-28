import React from "react";
import { Box, Button, Flex } from "theme-ui";
import theme from "../shared/theme";
import Icon from "./Icon";

const Header = () => {
  return (
    <Flex
      sx={{
        width: theme.space[8],
        height: theme.space[5],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          width: theme.space[8],
          height: theme.space[8],
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            color: theme.colors.whites[8],
            fontSize: theme.fontSizes[5],
            fontWeight: theme.fontWeights[9],
          }}
        >
          <Icon
            name="checkCircle"
            style={{
              color: theme.colors.whites[8],
              width: theme.space[9],
              marginRight: theme.space[0],
            }}
          />
          <span>Pomocounter</span>
        </Flex>
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
      </Flex>
    </Flex>
  );
};

export default Header;
