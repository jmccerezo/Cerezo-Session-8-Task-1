import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useGetAllPostsQuery } from "../slices/postsAPI";

const Posts = () => {
  const response = useGetAllPostsQuery();
  console.log("RESPONSE", response);

  const postsList = response.data ? (
    response.data.map((post) => {
      return (
        <div style={{ margin: "25px" }} key={post.id}>
          <Box sx={{ minWidth: 275, maxWidth: 500 }}>
            <Card variant="outlined" style={{ backgroundColor: "whitesmoke" }}>
              <CardContent style={{ padding: "20px" }}>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2">{post.body}</Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      );
    })
  ) : (
    <div>
      <h1 style={{ textAlign: "center" }}>Fetching data...</h1>
    </div>
  );

  return (
    <div
      style={{
        paddingTop: "65px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {postsList}
    </div>
  );
};

export default Posts;
