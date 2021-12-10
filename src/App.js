import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonIcon from "@mui/icons-material/Person";
import Chats from "./components/Chats";
import Navbar from "./components/Navbar";

const App = React.memo(() => {
  const myId = "10";
  const [value, setValue] = React.useState("0");
  const [conversations, setConversations] = React.useState([
    {
      id: "1",
      userName: "John Doe",
    },
    {
      id: "2",
      userName: "Rishabh Singh",
    },
    {
      id: "3",
      userName: "Shreya Shet",
    },
    {
      id: "4",
      userName: "Lol LOl LOl",
    },
    {
      id: "5",
      userName: "Newbie",
    },
  ]);

  const [messages, setMessages] = React.useState([
    {
      clients: ["1", "10"],
      messages: [
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Joh Doe",
          message: "hey",
          time: "13:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Joh Doe",
          message: "How are you ",
          time: "13:47",
        },
        {
          v: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Joh Doe",
          message: "This is a test message",
          time: "13:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Joh Doe",
          message: "i hope you recive react js mastery",
          time: "13:47",
        },
      ],
    },
    {
      clients: ["2", "10"],
      messages: [
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Rishabh Singh",
          message: "hi",
          time: "12:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Rishabh Singh",
          message: "Hope you are good ",
          time: "13:47",
        },
      ],
    },
    {
      clients: ["3", "10"],
      messages: [
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Shreya Shet",
          message: "hieeee",
          time: "12:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Shreya Shet",
          message: "Wyd",
          time: "13:47",
        },
      ],
    },
    {
      clients: ["4", "10"],
      messages: [
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Lol LOl LOl",
          message: "hey",
          time: "12:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Lol LOl LOl",
          message: "we will start production soon",
          time: "13:47",
        },
      ],
    },
    {
      clients: ["10", "5"],
      messages: [
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Newbie",
          message: "hey",
          time: "12:47",
        },
        {
          id: "d73aadbc-7e61-4551-b40b-a0fefb789224",
          name: "Lol LOl LOl",
          message: "This is Newbie here",
          time: "13:47",
        },
      ],
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box>
     <Navbar/>
      <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <TabContext value={value} variant="scrollable">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            // value={conversations}
            onChange={handleChange}
            aria-label="lab API tabs example"
            orientation="vertical"
            variant="scrollable"
          >
            {conversations &&
              conversations.map((conversation, index) => {
                console.log(index);
                return (
                  <Tab
                    icon={<PersonIcon />}
                    iconPosition="start"
                    label={conversation.userName}
                    value={index.toString()}
                    sx={{
                      ml: 0,
                      width: 200,
                      justifyContent: "flex-start !important",
                    }}
                  />
                );
              })}
          </TabList>
        </Box>
        {conversations &&
          conversations.map((conversation, index) => {
            let message = messages.filter((msg) => {
              return msg.clients.indexOf(conversation.id) !== -1;
            });
            if (message[0]) {
              message = message[0];
            }
            return (
              <TabPanel value={index.toString()}>
                <Chats conversation={conversation} message={message} />
              </TabPanel>
            );
          })}
      </TabContext>
    </Box>
   </Box>
  );
});

export default App;
