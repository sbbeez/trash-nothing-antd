import React, { useState } from "react";
import { Blurhash } from "react-blurhash";
import styles from "./progressiveImage.module.scss";

export default ({
  blurHash,
  imageUrl,
  width,
  height,
  index,
  onClick,
}: {
  blurHash: string;
  imageUrl: string;
  width: number;
  height: number;
  index: number;
  onClick: (selectedIndex: number) => void;
}) => {
  const [imageLoadState, setImageLoadState] = useState("loading");
  const onLoadSuccess = () => setImageLoadState("success");
  const onLoadError = () => setImageLoadState("error");
  return (
    <div className={styles.imageContent}>
      <Blurhash
        hash={blurHash}
        width={imageLoadState === "loading" ? width : 0}
        height={imageLoadState === "loading" ? height : 0}
        resolutionX={32}
        resolutionY={32}
        punch={0}
      />
      <img
        width={imageLoadState === "success" ? width : 0}
        height={imageLoadState === "success" ? height : 0}
        src={imageUrl}
        onLoad={onLoadSuccess}
        onError={onLoadError}
        onClick={() => onClick(index)}
      />
    </div>
  );
};
