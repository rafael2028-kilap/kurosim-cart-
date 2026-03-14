import { CartItem as CartItemType } from "@/features/plans/types"
import { getCart, saveCart } from "@/features/cart/cartStore"

interface Props {
  item: CartItemType
}

export default function CartItem({ item }: Props) {

  const removeItem = () => {

    const cart = getCart().filter(i => i.id !== item.id)

    saveCart(cart)

  }

  return (

    <div className="cartCard">

      <div>

        <strong>{item.plan.title}</strong>

        <div className="cartInfo">
          Activation: {item.activationDate}
        </div>

        <div className="cartInfo">
          Qty: {item.quantity}
        </div>

      </div>

      <div className="cartRight">

        <strong>
          Rp {(item.plan.price * item.quantity).toLocaleString()}
        </strong>

        <button
          className="removeBtn"
          onClick={removeItem}
        >
          Remove
        </button>

      </div>

    </div>

  )

}