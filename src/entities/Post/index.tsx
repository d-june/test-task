import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "./model";
import Button from "../../shared/Button";

import styles from "./Post.module.scss";

type PostProps = {
  post: PostType;
};

const Post: FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  const buttonNavigateHandler = () => {
    navigate(`${post.id}`);
  };
  return (
    <div className={styles.post}>
      <div>{post.id}.</div>
      <h2>{post.title}</h2>
      <p className={styles.postBody}>{post.body}</p>
      <Button onClickHandler={buttonNavigateHandler}>Просмотр</Button>
    </div>
  );
};

export default Post;
