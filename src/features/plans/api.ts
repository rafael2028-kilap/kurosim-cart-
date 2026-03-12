import { plans } from "@/data/plans"
import { Plan } from "./types"

export const getPlans = async (): Promise<Plan[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(plans)
    }, 500)
  })
}