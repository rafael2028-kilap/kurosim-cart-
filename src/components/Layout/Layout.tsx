import Link from "next/link"
import Navbar from "../Navbar"
<Link href="/cart">
Cart
</Link>
export default function Layout({children}:{children:React.ReactNode}){

return(

<>
<Navbar/>

<main>
{children}
</main>

</>

)

}