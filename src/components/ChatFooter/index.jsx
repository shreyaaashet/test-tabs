import { Box, IconButton, InputBase, Paper, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@emotion/react";

const ChatFooter = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          border: 1,
          borderColor: theme.palette.primary.main,
          borderRadius: 10,
        }}
        elevation={0}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, pt: 0.3, pb: 0.3 }}
          placeholder="Type a message"
          inputProps={{ "aria-label": "Type a message" }}
        />
      </Paper>
      <IconButton
        color="primary"
        aria-label="send message"
        sx={{ marginRight: 2, marginLeft: 1 }}
        component="span"
        size="large"
      >
        <SendIcon style={{ transform: "scale(1.5)" }} />
      </IconButton>
    </Box>
  );
};

export default ChatFooter;
