import { TickerModel } from "../../models/TickerModel";

export interface TickersState {
  tickers: TickerModel[];
  romoved: string[];
}

export enum TickersActionEnum {
  SET_TICKERS = "SET_TICKERS",
  REMOVE_TICKER = "REMOVE_TICKER",
  RESET_TICKERS = "RESET_TICKERS",
}

export interface SetTickersAction {
  type: TickersActionEnum.SET_TICKERS;
  payload: TickerModel[];
}
export interface RemoveTickerAction {
  type: TickersActionEnum.REMOVE_TICKER;
  payload: string;
}
export interface ResetTickersAction {
  type: TickersActionEnum.RESET_TICKERS;
}

export type TickersAction =
  | SetTickersAction
  | RemoveTickerAction
  | ResetTickersAction;
