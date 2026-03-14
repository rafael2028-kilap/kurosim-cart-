export interface Plan {
  id: string
  region: string
  country: string
  title: string
  data: string
  duration: number
  price: number
}

export interface CartItem {
  id: string
  plan: Plan
  activationDate: string
  quantity: number
}