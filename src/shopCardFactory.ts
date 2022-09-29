import { ObjectData, ProductType} from "./type";
import { ShopFactory} from "w01e03-object-oriented-structure/src/ShopFactory";
import {pinoMessage, textMessage} from "./common";

export const  createShopCard = async (cartItemData: ObjectData,Type: ProductType, Name: any) => {
     textMessage(`${Name} - It is your Summary: `)
     // @ts-ignore
    Object.keys(cartItemData).forEach((key: ProductType) => {
        const shopFactory = new ShopFactory<typeof key>()
         cartItemData[key].forEach(cartItem =>  {
             shopFactory.addProductToShopCard(cartItem, cartItem.amount)
         })
       const allProductsLength =  shopFactory.getLengthAllProducts()
        pinoMessage(`Your products in the shopping cart for the category - ${key} ${allProductsLength}`)
     })
}