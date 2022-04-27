import React, { useEffect, useMemo } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { tickerActionCreator } from "../../store/ticker/action";
import { Button, Col, Row } from "antd";
import TickerTable from "../../components/TickerTable";
import TickerApi from "../../services/tickerService";

const FinanceTable: FC = () => {
  const { tickers, romoved } = useTypedSelector(
    (state) => state.tickersReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tickerActionCreator.getTickerts());
  }, [dispatch]);

  const watchingGroup = useMemo(() => {
    return tickers.filter((ticker) => !romoved.includes(ticker.ticker));
  }, [tickers, romoved]);

  const handleRemove = (val: string) => {
    dispatch(tickerActionCreator.removeTicker(val));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        {<TickerTable valTick={watchingGroup} handleRemove={handleRemove} />}
      </Col>
      <Button onClick={() => TickerApi.disconnect()}>stop tick</Button>
      {romoved.length ? (
        <Button onClick={() => dispatch(tickerActionCreator.resetTickers())}>
          Return removed
        </Button>
      ) : null}
    </Row>
  );
};
export default FinanceTable;
