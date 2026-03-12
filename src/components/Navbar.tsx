import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { useEffect,useState } from "react"
import { getCart } from "@/features/cart/cartStore"

export default function Navbar(){

const [cartCount,setCartCount] = useState(0)

useEffect(()=>{

const updateCart=()=>{

const cart=getCart()

setCartCount(cart.length)

}

updateCart()

window.addEventListener("cartUpdated",updateCart)

return()=>window.removeEventListener("cartUpdated",updateCart)

},[])

return(

<header className="navbar">

<div className="navLeft">

<Link href="/" className="logo">
Kurosim
</Link>

</div>

<div className="navMenu">

<Link href="/">Plans</Link>

<Link href="/orders">My Orders</Link>

<Link href="/cart" className="cartButton">

<FaShoppingCart/>

{cartCount>0 &&(

<span className="cartBadge">
{cartCount}
</span>

)}

</Link>

</div>

</header>

)

}