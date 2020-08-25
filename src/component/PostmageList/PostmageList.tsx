import React from "react";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { Photo } from "../../screen/Post/type";
import { Empty } from "antd";
import styles from "./postImageListStyle.module.scss";

export default (props: { photos: Photo[] | null }) => {
  if (!props.photos || props.photos.length === 0)
    return <Empty className={styles.alignSelfCenter} />;
  return (
    <div className={styles.row}>
      {(props.photos || []).map((photo) => (
        <ProgressiveImage
          imageUrl={photo.thumbnail}
          blurHash={photo.blurhash}
        />
      ))}
    </div>
  );
};
