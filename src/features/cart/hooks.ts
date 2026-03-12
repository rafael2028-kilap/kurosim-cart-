import { useState } from "react"
import { CartItem, Plan } from "../plans/types"
import { getCart, saveCart, clearCart } from "./cartStore"
import { addOrder } from "@/utils/orderStorage"

interface AddCartInput {
  plan: Plan
  activationDate: string
  quantity: number
}

export const useCart = () => {

const initialCart =
typeof window !== "undefined"
? getCart()
: []

const [cart,setCart] = useState<CartItem[]>(initialCart)

const addToCart = (item:AddCartInput) => {

const newItem:CartItem = {

id: crypto.randomUUID(),
plan:item.plan,
activationDate:item.activationDate,
quantity:item.quantity

}

const updated=[...cart,newItem]

setCart(updated)

saveCart(updated)

}

const removeItem=(id:string)=>{

const updated=cart.filter(i=>i.id!==id)

setCart(updated)

saveCart(updated)

}

const placeOrder=()=>{

if(cart.length===0) return

const items=cart.map(i=>({

id:i.id,
title:i.plan.title,
price:i.plan.price,
quantity:i.quantity,
activationDate:i.activationDate

}))

const total=items.reduce(
(sum,i)=>sum+i.price*i.quantity,
0
)

const order={

id:crypto.randomUUID(),
items,
total,
createdAt:new Date().toISOString()

}

addOrder(order)

clearCart()

setCart([])

}

return{

cart,
addToCart,
removeItem,
placeOrder

}

}