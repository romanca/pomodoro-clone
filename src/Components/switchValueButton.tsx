import { Button } from "@theme-ui/components";
import React from "react";
import theme from "../shared/theme";

interface IProps {
  onClick: () => void;
  title: string;
  selected?: boolean;
}

const SwitchValueButton: React.FC<IProps> = ({ onClick, title, selected }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        border: "none",
        outline: "none",
        borderRadius: theme.borderRadiuss[0],
        fontFamily: "ArialRoundedMTBold",
        fontSize: theme.fontSizes[1],
        height: theme.space[21],
        cursor: "pointer",
        background: selected ? theme.colors.blacks[11] : "transparent",
        color: theme.colors.whites[8],
        opacity: theme.opacities[1],
        fontWeight: theme.fontWeights[9],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {title}
    </Button>
  );
};
export default SwitchValueButton;
