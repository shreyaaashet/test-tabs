import { Box } from "@mui/material";
import React, { memo } from "react";
import ChatFooter from "../ChatFooter";

const Chats = ({ message, conversation }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100%",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {message &&
            message.messages.map((msg, index) => {
              return (
                <Box key={index}>
                  {msg.message}
                  <br />
                  <b style={{ fontSize: 10 }}>{conversation.userName}</b>
                  <br />
                  <br />
                </Box>
              );
            })}
        </Box>
      </Box>
      <ChatFooter />
    </Box>
  );
};

export default memo(Chats);
