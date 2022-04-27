import React from "react";
import { FC } from "react";
import { Button, Table } from "antd";
import "antd/dist/antd.css";
import { formatedDate } from "../../utils/dateFormate";
import { RenderArrow } from "../RenderArrow";
import { TickerModel } from "../../models/TickerModel";

declare type AlignType = "left" | "center" | "right";

type TickerTableProp = {
  valTick: TickerModel[];
  handleRemove: (val: string) => void;
};

const TickerTable: FC<TickerTableProp> = ({ valTick, handleRemove }) => {
  const columns = [
    {
      title: "Company",
      dataIndex: "ticker",
      key: "ticker",
      align: "left" as AlignType,
    },
    {
      title: "Exchange",
      dataIndex: "exchange",
      key: "exchange",
      align: "left" as AlignType,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a: TickerModel, b: TickerModel) => a.price - b.price,
      align: "left" as AlignType,
      render: (price: string) => <RenderArrow price={+price || 0} />,
      shouldCellUpdate: (current: TickerModel, prev: TickerModel) =>
        current.price !== prev.price,
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      sorter: (a: TickerModel, b: TickerModel) => a.change - b.change,
      align: "left" as AlignType,
    },
    {
      title: "Change percent",
      dataIndex: "change_percent",
      sorter: (a: TickerModel, b: TickerModel) =>
        a.change_percent - b.change_percent,
      key: "change_percent",
      align: "left" as AlignType,
    },
    {
      title: "Dividend",
      dataIndex: "dividend",
      key: "dividends",
      align: "left" as AlignType,
    },
    {
      title: "Yield",
      dataIndex: "yield",
      key: "yield",
      align: "left" as AlignType,
    },
    {
      title: "Last trade time",
      dataIndex: "last_trade_time",
      key: "last_trade_time",
      align: "left" as AlignType,
      render: (date: string) => formatedDate(date),
    },
    {
      key: "direction",
      render: (item: TickerModel, record: TickerModel) => {
        const handleClick = () => {
          handleRemove(record?.ticker);
        };
        return (
          <>
            <Button onClick={handleClick}>remove</Button>
          </>
        );
      },
    },
  ];

  return (
    <Table
      size="small"
      bordered={true}
      dataSource={valTick}
      columns={columns}
      pagination={false}
      rowKey="ticker"
    />
  );
};
export default TickerTable;
