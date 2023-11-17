import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfiniteLoader, List } from "react-virtualized";
import { setPosts } from "./redux/slice";
import { useGetAllPostsQuery } from "./api/postsApi";
import { RootState } from "../../app/store";
import Post from "../../entities/Post";

import "react-virtualized/styles.css";
import styles from "./PostsList.module.scss";

const PostsList = () => {
  const [postStart, setPostStart] = useState(0);
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.postsSlice);

  let { data = [] } = useGetAllPostsQuery({
    start: postStart,
    limit: 10,
  });

  useEffect(() => {
    dispatch(setPosts(data));
  }, [data.length, data[0]]);

  const remoteRowCount: number = 100;

  function rowRenderer({
    key,
    index,
    style,
  }: {
    key: string;
    index: number;
    style: CSSProperties | undefined;
  }) {
    return (
      <div key={key} style={style}>
        {posts[index] && <Post post={posts[index]} />}
      </div>
    );
  }

  function isRowLoaded({ index }: { index: number }) {
    return !!posts[index];
  }

  const loadMoreRows = async ({ startIndex }: { startIndex: number }) => {
    await new Promise((resolve) => {
      resolve(setPostStart(startIndex));
    });
  };

  return (
    <div className={styles.postsList}>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={remoteRowCount}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={1000}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={remoteRowCount}
            rowHeight={100}
            rowRenderer={rowRenderer}
            width={1440}
            style={{ height: "95vh", width: "100%", marginRight: "50px" }}
          />
        )}
      </InfiniteLoader>
    </div>
  );
};

export default PostsList;
