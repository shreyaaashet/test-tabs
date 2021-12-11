import { Box } from "@mui/material";
import React, { memo } from "react";
import ChatFooter from "../ChatFooter";

const Chats = ({ message, conversation, myId }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100%",
      }}
    >
      <Box sx={{ p: "24px", maxHeight: "70.5vh", overflow: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {message &&
            message.messages.map((msg, index) => {
              if (msg.id === myId) {
                return (
                  <Box
                    key={index}
                    sx={{ display: "flex", justifyContent: "right" }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          bgcolor: "#9757EF",
                          color: "#FFF",
                          mt: 0.3,
                          mb: 0.3,
                          p: 1,
                          borderRadius: 2,
                          maxWidth: 350,
                        }}
                      >
                        <p style={{ margin: 0, marginBottom: 4 }}>
                          {msg.message}
                        </p>
                      </Box>
                      <b style={{ fontSize: 10, textAlign: "right", mr: 2 }}>
                        You
                      </b>
                    </Box>
                  </Box>
                );
              } else {
                return (
                  <Box key={index} sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        sx={{
                          bgcolor: "#FFD970",
                          mt: 0.3,
                          mb: 0.3,
                          p: 1,
                          borderRadius: 2,
                          maxWidth: 350,
                        }}
                      >
                        <p style={{ margin: 0, marginBottom: 4 }}>
                          {msg.message}
                        </p>
                      </Box>
                      <b style={{ fontSize: 10 }}>{conversation.userName}</b>
                    </Box>
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
      <ChatFooter />
    </Box>
  );
};

export default memo(Chats);
