import React, { useState } from "react";
import styles from "./descriptionViewStyle.module.scss";

export default ({
  value = "",
  maxCharacters = 250,
}: {
  value: string;
  maxCharacters?: number;
}) => {
  const [showFull, setShowFull] = useState<boolean>(false);
  return (
    <>
      {value
        .substr(0, showFull ? value.length : maxCharacters)
        .split("\n")
        .map((item) => (
          <p>{item}</p>
        ))}
      {value.length > maxCharacters && (
        <a
          onClick={() => setShowFull(!showFull)}
          className={styles.descriptionMore}
        >
          {showFull ? " less" : "more"}
        </a>
      )}
    </>
  );
};
