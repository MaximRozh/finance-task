import {
  RemoveTickerAction,
  ResetTickersAction,
  SetTickersAction,
  TickersActionEnum,
} from "./types";

import { AppDispatch } from "..";
import { TickerModel } from "../../models/TickerModel";
import TickerApi from "../../services/tickerService";

export const tickerActionCreator = {
  setTickers: (tickers: TickerModel[]): SetTickersAction => ({
    type: TickersActionEnum.SET_TICKERS,
    payload: tickers,
  }),
  removeTicker: (val: string): RemoveTickerAction => ({
    type: TickersActionEnum.REMOVE_TICKER,
    payload: val,
  }),
  resetTickers: (): ResetTickersAction => ({
    type: TickersActionEnum.RESET_TICKERS,
  }),
  getTickerts: () => (dispatch: AppDispatch) => {
    TickerApi.getTikers("ticker", (data) => {
      dispatch(tickerActionCreator.setTickers(data));
    });
  },
};
