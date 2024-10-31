import { useState } from "react";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";

export function Dashboard() {
  const [postId, setPostId] = useState(-1);

  return (
    <>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </>
  );
}
