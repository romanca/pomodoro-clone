import { Box, Input } from "@theme-ui/components";
import React from "react";

const SettingsInputs = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(182, 165, 166, 0.2)",
        borderBottom: "1px solid rgba(182, 165, 166, 0.2)",
        padding: "20px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "ArialRoundedMTBold",
      }}
    >
      <Box
        sx={{
          color: "rgb(85, 85, 85)",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
        }}
      >
        Time (minutes)
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ width: "98px" }}>
          <Box
            sx={{
              display: "block",
              fontSize: "14px",
              color: "rgb(187, 187, 187)",
              marginBottom: "4px",
            }}
          >
            Pomodoro
          </Box>
          <Input
            value={25}
            sx={{
              borderRadius: "4px",
              background: "rgb(239, 239, 239)",
              fontSize: "16px",
              padding: "10px",
              boxShadow: "none",
              border: "none",
              color: "rgb(85, 85, 85)",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "ArialRoundedMTBold",
            }}
          />
        </Box>
        <Box sx={{ width: "98px" }}>
          <Box
            sx={{
              display: "block",
              fontSize: "14px",
              color: "rgb(187, 187, 187)",
              marginBottom: "4px",
            }}
          >
            Short Break
          </Box>
          <Input
            value={5}
            sx={{
              borderRadius: "4px",
              background: "rgb(239, 239, 239)",
              fontSize: "16px",
              padding: "10px",
              boxShadow: "none",
              border: "none",
              color: "rgb(85, 85, 85)",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "ArialRoundedMTBold",
            }}
          />
        </Box>
        <Box sx={{ width: "98px" }}>
          <Box
            sx={{
              display: "block",
              fontSize: "14px",
              color: "rgb(187, 187, 187)",
              marginBottom: "4px",
            }}
          >
            Long Break
          </Box>
          <Input
            value={15}
            sx={{
              borderRadius: "4px",
              background: "rgb(239, 239, 239)",
              fontSize: "16px",
              padding: "10px",
              boxShadow: "none",
              border: "none",
              color: "rgb(85, 85, 85)",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "ArialRoundedMTBold",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsInputs;
