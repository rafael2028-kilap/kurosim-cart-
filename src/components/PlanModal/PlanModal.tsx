import { Plan } from "@/features/plans/types"
import { useCart } from "@/features/cart/hooks"
import { useState } from "react"

interface Props {
  plan: Plan
  onClose: () => void
}

export default function PlanModal({ plan, onClose }: Props) {

  const { addToCart } = useCart()

  const [activationDate, setActivationDate] = useState("")
  const [quantity, setQuantity] = useState(1)

  const today = new Date().toISOString().split("T")[0]

  const total = plan.price * quantity

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addToCart({
      plan,
      activationDate,
      quantity
    })

    onClose()
  }

  return (

    <div className="modalOverlay">

      <div className="modalCard">

        <button
          className="modalClose"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{plan.title}</h2>

        <p>
          {plan.data} • {plan.duration} Days
        </p>

        <form onSubmit={handleSubmit}>

          <label>Activation Date</label>

          <input
            type="date"
            min={today}
            value={activationDate}
            onChange={(e)=>setActivationDate(e.target.value)}
            required
          />

          <label>Quantity</label>

          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e)=>setQuantity(Number(e.target.value))}
          />

          <div className="modalTotal">

            <span>Total</span>

            <strong>
              Rp {total.toLocaleString()}
            </strong>

          </div>

          <button
            type="submit"
            className="addBtn"
          >
            Add To Cart
          </button>

        </form>

      </div>

    </div>

  )

}