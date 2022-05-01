import React, { FC } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
import { usePreviousState } from "../../hooks/usePreviousState";

type RenderArrowProp = {
  price: number;
};

const getPriceColor = (hasGrown: boolean | undefined) =>
  hasGrown ? "green" : "red";
const getArrowIcon = (hasGrown: boolean | undefined) =>
  hasGrown ? <ArrowUpOutlined /> : <ArrowDownOutlined />;

const RenderArrow: FC<RenderArrowProp> = ({ price }) => {
  const prev = usePreviousState(price) || 0;

  const hasGrown = price - prev >= 0;

  return (
    <Statistic
      title="Active"
      value={price}
      valueStyle={{ color: getPriceColor(hasGrown) }}
      prefix={getArrowIcon(hasGrown)}
    />
  );
};

export default React.memo(RenderArrow);
