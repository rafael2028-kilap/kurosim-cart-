import { useRouter } from "next/router"
import { getOrders } from "@/utils/orderStorage"

export default function OrderDetail(){

const router=useRouter()

const {id}=router.query

const orders=getOrders()

const order=orders.find(o=>o.id===id)

if(!order) return <p>Order not found</p>

return(

<div className="container">

<h1>Order Detail</h1>

{order.items.map(item=>(

<div
key={item.id}
className="cartItem"
>

<div>

<h3>{item.title}</h3>

<p>Activation: {item.activationDate}</p>

<p>Qty: {item.quantity}</p>

</div>

<strong>
Rp {(item.price*item.quantity).toLocaleString()}
</strong>

</div>

))}

<div className="cartSummary">

<h2>
Total: Rp {order.total.toLocaleString()}
</h2>

</div>

</div>

)

}