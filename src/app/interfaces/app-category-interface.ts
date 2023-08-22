import { IChannel } from "./app-channel-interface";

export interface ICategory {
    id: Number,
    name: String,
    channelList: IChannel[]
}