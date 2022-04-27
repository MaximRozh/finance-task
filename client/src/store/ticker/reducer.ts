import { TickersAction, TickersActionEnum, TickersState } from "./types";

const initialState: TickersState = {
  tickers: [],
  romoved: [],
};

export default function tickersReducer(
  state = initialState,
  action: TickersAction
): TickersState {
  switch (action.type) {
    case TickersActionEnum.SET_TICKERS:
      return { ...state, tickers: action.payload };
    case TickersActionEnum.REMOVE_TICKER:
      return { ...state, romoved: [...state.romoved, action.payload] };
    case TickersActionEnum.RESET_TICKERS:
      return { ...state, romoved: [] };
    default:
      return state;
  }
}
