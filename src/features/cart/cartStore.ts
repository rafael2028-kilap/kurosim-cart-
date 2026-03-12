import { CartItem } from "../plans/types"

const KEY = "kurosim-cart"

export const getCart = (): CartItem[] => {

  if (typeof window === "undefined") return []

  const data = localStorage.getItem(KEY)

  return data ? JSON.parse(data) : []

}

export const saveCart = (cart: CartItem[]) => {

  if (typeof window === "undefined") return

  localStorage.setItem(KEY, JSON.stringify(cart))

  // trigger event supaya navbar update
  window.dispatchEvent(new Event("cartUpdated"))

}

export const clearCart = () => {

  if (typeof window === "undefined") return

  localStorage.removeItem(KEY)

  // trigger event juga
  window.dispatchEvent(new Event("cartUpdated"))

}