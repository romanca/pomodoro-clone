import React from "react";
import { Box } from "theme-ui";

const IconNamesMap = {
  checkCircle: "fa fa-check-circle",
  settings: "fa fa-cog",
  rightArrow: "fa fa-caret-right",
  minus: "fa fa-minus",
};

export type IconName = keyof typeof IconNamesMap;

interface IProps {
  name: IconName;
  style?: React.CSSProperties | undefined;
  color?: string;
  fontSize?: number;
}

const Icon: React.FC<IProps> = ({ name, color, style }) => {
  return (
    <Box>
      <i className={IconNamesMap[name]} color={color} style={style} />
    </Box>
  );
};
export default Icon;
