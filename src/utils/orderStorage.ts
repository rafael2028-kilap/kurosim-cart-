export type OrderItem = {
  id: string
  title: string
  price: number
  quantity: number
  activationDate: string
}

export type Order = {
  id: string
  items: OrderItem[]
  total: number
  createdAt: string
}

const STORAGE_KEY = "kurosim_orders"

export function getOrders(): Order[] {

  if (typeof window === "undefined") return []

  const data = localStorage.getItem(STORAGE_KEY)

  return data ? JSON.parse(data) : []

}

export function saveOrders(orders: Order[]) {

  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))

}

export function addOrder(order: Order) {

  const orders = getOrders()

  orders.push(order)

  saveOrders(orders)

}