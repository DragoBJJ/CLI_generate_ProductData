export enum  ProductType {
    BUY_NOW = "buyNow",
    AUCTION = "auction",
    GIVE_FOR_FREE = "forFree",
}
export type  ProductTypeBody  = {
    id: string,
    type: ProductType
    name: string,
    amount: number,
    price:  number
}

 export type ObjectData = {
    [key in ProductType]: ProductTypeBody[]
 }