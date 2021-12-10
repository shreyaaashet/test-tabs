import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const ChatFooter = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField placeholder="Type a message" type="text" fullWidth />
      <IconButton
        color="primary"
        aria-label="send message"
        sx={{ marginRight: 5, marginLeft: 5 }}
        component="span"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatFooter;
