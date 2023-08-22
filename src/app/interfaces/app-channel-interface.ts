import { IMessage } from "./app-message-interface";

export interface IChannel {
    id: Number,
    name: String,
    messageList: IMessage[]
}