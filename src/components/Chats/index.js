import React, { memo } from "react";

const Chats = ({ message, conversation }) => {
  return (
    <div>
      {message &&
        message.messages.map((msg, index) => {
          return (
            <div key={index}>
              {msg.message}
              <br />
              <b>{conversation.userName}</b>
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default memo(Chats);
