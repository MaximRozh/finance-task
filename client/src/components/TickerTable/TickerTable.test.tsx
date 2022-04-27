import { fireEvent } from "@testing-library/react";
import ReactDOM from "react-dom";
import TickerTable from ".";
import { tickets } from "../../utils/testUtils";

let div: any = null;
let handleRemove = jest.fn();

beforeEach(() => {
  div = document.createElement("div");
  ReactDOM.render(
    <TickerTable valTick={tickets} handleRemove={handleRemove} />,
    div
  );
});
afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});

describe("Snapshot Testing", () => {
  test("Snapshot test of TickerTable", () => {
    expect(div).toMatchSnapshot();
  });
});

describe("Ticker table", () => {
  test("table render", () => {
    const rows = div.getElementsByClassName("ant-table-row-level-0");
    expect(rows.length).toBe(6);
  });

  test("remove ticker", () => {
    const button = div.querySelector(".ant-btn.ant-btn-default");
    fireEvent.click(button);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});
