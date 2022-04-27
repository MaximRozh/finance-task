import { io, Socket } from "socket.io-client";
import { TickerModel } from "../models/TickerModel";

const baseUrl = "http://localhost:4000";

class TickerApi {
  socket: Socket | null;
  constructor(private _baseUrl: string) {
    this.socket = io(this._baseUrl);
  }
  getTikers(name: string, callback: (data: TickerModel[]) => void) {
    this.socket?.emit("start");
    this.socket?.on(name, (value: TickerModel[]) => {
      callback(value);
    });
  }
  disconnect() {
    this.socket?.disconnect();
  }
  connect() {
    this.socket?.connect();
  }
}

export default new TickerApi(baseUrl);
