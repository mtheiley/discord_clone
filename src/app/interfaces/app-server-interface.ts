import { ICategory } from "./app-category-interface"

export interface IServer {
    id: Number,
    name: String,
    imageSource: String,
    categoryList: ICategory[]
}