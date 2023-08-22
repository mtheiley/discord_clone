import { IUser } from "./app-user-interface";

export interface IMessage {
    id: Number,
    user: IUser,
    time: String,
    content: String,
    type: String
}