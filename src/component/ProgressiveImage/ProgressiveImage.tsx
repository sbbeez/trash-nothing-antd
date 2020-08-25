import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export default (props: { blurHash: string; imageUrl: string }) => {
  const [imageLoadState, setImageLoadState] = useState("loading");
  const onLoadSuccess = () => setImageLoadState("success");
  const onLoadError = () => setImageLoadState("error");
  return (
    <>
      <Blurhash
        hash={props.blurHash}
        width={imageLoadState === "loading" ? 300 : 0}
        height={imageLoadState === "loading" ? 400 : 0}
        resolutionX={32}
        resolutionY={32}
        punch={0}
      />
      <img
        width={imageLoadState === "success" ? 300 : 0}
        height={imageLoadState === "success" ? 400 : 0}
        src={props.imageUrl}
        onLoad={onLoadSuccess}
        onError={onLoadError}
      />
    </>
  );
};
