import React from "react";
import { Empty, Spin, Space } from "antd";
import styles from "./listStyle.module.scss";

export interface IList<T> {
  data: T[];
  renderData: (item: T) => JSX.Element;
  loading: boolean;
}

export interface IListConstraints {}

export function List<T extends IListConstraints>(props: IList<T>) {
  if (props.loading) return <Spin className={styles.selfCenter} />;
  if (!props.data.length) return <Empty className={styles.selfCenter} />;

  return (
    <Space direction="vertical" size={"middle"}>
      {props.data.map((item) => props.renderData(item))}
    </Space>
  );
}
