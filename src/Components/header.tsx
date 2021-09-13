import React from "react";
import {  Flex } from "theme-ui";
import theme from "../shared/theme";
import Icon from "./Icon";
import Settings from "./settings/settings";

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
        <Settings />
      </Flex>
    </Flex>
  );
};

export default Header;
