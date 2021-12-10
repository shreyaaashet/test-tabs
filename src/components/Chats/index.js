import { Box } from "@mui/material";
import React, { memo } from "react";

const Chats = ({ message, conversation }) => {
  return (
    <Box>
      {message &&
        message.messages.map((msg, index) => {
          return (
            <Box key={index}>
              {msg.message}
              <br />
              <b>{conversation.userName}</b>
              <br />
              <br />
            </Box>
          );
        })}
    </Box>
  );
};

export default memo(Chats);
