import React from "react";
import { useParams } from "react-router-dom";

import PostFull from "../../entities/PostFull";

function PostPage() {
  const { id } = useParams();

  return (
    <main>
      <PostFull id={id} />
    </main>
  );
}

export default PostPage;
