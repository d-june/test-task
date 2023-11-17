import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPostByIdQuery } from "./api/postApi";
import Button from "../../shared/Button";

import styles from "./PostFull.module.scss";

type PostFullProps = {
  id: string | undefined;
};

const PostFull: FC<PostFullProps> = ({ id }) => {
  let { data } = useGetPostByIdQuery({
    id: id,
  });

  const navigate = useNavigate();

  const buttonNavigateBackHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.postFull}>
      <div className={styles.postFullWrapper}>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <Button onClickHandler={buttonNavigateBackHandler}>Назад</Button>
      </div>
    </div>
  );
};

export default PostFull;
