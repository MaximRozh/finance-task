import React, { FC, useMemo } from "react";
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

export const RenderArrow: FC<RenderArrowProp> = ({ price }) => {
  const prev = usePreviousState(price) || 0;
  const hasGrown = useMemo(() => {
    if (price !== prev) {
      return price - prev >= 0;
    }
  }, [prev, price]);

  return (
    <Statistic
      title="Active"
      value={price}
      valueStyle={{ color: getPriceColor(hasGrown) }}
      prefix={getArrowIcon(hasGrown)}
    />
  );
};
