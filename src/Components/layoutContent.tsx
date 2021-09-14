import React from "react";
import { Box } from "theme-ui";
import theme from "../shared/theme";
import Counter from "./Counter";
import Header from "./header";

interface IProps {
  valueSelect: string;
  toggleContent: (content: string) => void;
}

const LayoutContent: React.FC<IProps> = ({ valueSelect, toggleContent }) => {
  return (
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
          <Counter valueSelect={valueSelect} toggleContent={toggleContent} />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutContent;
