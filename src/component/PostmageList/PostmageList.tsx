import React from "react";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { Photo } from "../../screen/Post/type";
import { Empty } from "antd";
import Viewer from "react-viewer";
import styles from "./postImageListStyle.module.scss";

export default (props: { photos: Photo[] | null }) => {
  const [imageViewerDetails, setImageViewerDetails] = React.useState({
    visible: false,
    activeIndex: 0,
  });
  if (!props.photos || props.photos.length === 0)
    return <Empty className={styles.alignSelfCenter} />;
  return (
    <>
      <div className={styles.row}>
        {(props.photos || []).map((photo, index) => (
          <ProgressiveImage
            imageUrl={photo.thumbnail}
            blurHash={photo.blurhash}
            width={
              (photo.images && photo.images[0] && photo.images[0].width) || 0
            }
            height={
              (photo.images && photo.images[0] && photo.images[0].height) || 0
            }
            index={index}
            onClick={(selectedIndex: number) => {
              setImageViewerDetails({
                visible: true,
                activeIndex: selectedIndex,
              });
            }}
          />
        ))}
      </div>
      <Viewer
        visible={imageViewerDetails.visible}
        activeIndex={imageViewerDetails.activeIndex}
        onClose={() => {
          setImageViewerDetails({
            visible: false,
            activeIndex: 0,
          });
        }}
        images={(props.photos || []).map((photo) => ({ src: photo.url }))}
      />
    </>
  );
};
