import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import { Tabs } from '@mui/material';

export default function App() {
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };

  return (
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
                  <Tab label={conversation.userName} value={parseInt(index)} />
                );
              })}
          </TabList>
        </Box>
        {conversations &&
          conversations.map((conversation, index) => {
            return (
              <TabPanel value={parseInt(index)}>
                {conversation.userName}
              </TabPanel>
            );
          })}
      </TabContext>
    </Box>
  );
}
