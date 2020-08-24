import React, { useState } from "react";
import styles from "./style.module.scss";
import { PostResponse } from "./type";

export default () => {
  const [data, setData] = useState<PostResponse>();
  return (
    <div className={styles.container}>
      {data &&
        data.posts.map((item, index) => {
          return <div key={index}>{item.type}</div>;
        })}
    </div>
  );
};
