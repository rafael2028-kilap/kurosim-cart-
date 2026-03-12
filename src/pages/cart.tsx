import { useCart } from "@/features/cart/hooks"
import { FiTrash2 } from "react-icons/fi"

export default function CartPage(){

const { cart, removeItem, placeOrder } = useCart()

const total = cart.reduce(
(sum,i)=>sum+i.plan.price*i.quantity,
0
)

return(

<div className="container">

<h1>Your Cart</h1>

<div className="cartLayout">

{/* LEFT SIDE */}

<div className="cartItems">

{cart.length === 0 && (
<p>Your cart is empty</p>
)}

{cart.map(item=>{

const price = item.plan.price * item.quantity

return(

<div key={item.id} className="cartCard">

<div>

<h3>
{item.plan.title}
</h3>

<p className="cartInfo">
Activation: {item.activationDate}
</p>

<p className="cartInfo">
Qty: {item.quantity}
</p>

</div>

<div className="cartRight">

<strong>
Rp {price.toLocaleString()}
</strong>

<button
className="removeBtn"
onClick={()=>removeItem(item.id)}
>

<FiTrash2 />
Remove

</button>

</div>

</div>

)

})}

</div>

{/* RIGHT SIDE */}

<div className="orderSummary">

<h3>Order Summary</h3>

{cart.map(item=>{

const price = item.plan.price * item.quantity

return(

<div key={item.id} className="summaryRow">

<span>
1x {item.plan.title}
</span>

<span>
Rp {price.toLocaleString()}
</span>

</div>

)

})}

<hr />

<div className="summaryTotal">

<span>Total</span>

<strong>
Rp {total.toLocaleString()}
</strong>

</div>

<button
className="checkoutBtn"
onClick={placeOrder}
>
Place Order →
</button>

<p className="termsText">
By placing your order, you agree to our Terms of Service and Privacy Policy.
</p>

</div>

</div>

</div>

)

}