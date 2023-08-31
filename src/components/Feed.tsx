import {Box} from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed: React.FC = () => {
  return (
    <Box flex={1} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
