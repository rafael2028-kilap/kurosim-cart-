import Link from "next/link"
import { getOrders, Order } from "@/utils/orderStorage"

import { FaCheckCircle } from "react-icons/fa"
import { FiCalendar, FiBox } from "react-icons/fi"

export default function OrdersPage() {

  const orders: Order[] =
    typeof window !== "undefined"
      ? getOrders().slice().reverse()
      : []

  return (

    <div className="container">

      <h1>My Orders</h1>

      <p className="ordersSubtitle">
        Manage and view your purchased eSIM data plans.
      </p>

      {orders.length === 0 && (
        <p>No orders yet</p>
      )}

      {orders.map(order => {

        const itemsText = order.items
          .map(i => `1x ${i.title}`)
          .join(", ")

        return (

          <div key={order.id} className="orderCard">

            {/* LEFT SIDE */}

            <div className="orderLeft">

              {/* HEADER */}

              <div className="orderHeader">

                <h3 className="orderId">
                  ORD-{order.id.slice(0, 4)}
                </h3>

                <span className="orderStatus">
                  <FaCheckCircle />
                  Completed
                </span>

                <span className="orderDate">
                  <FiCalendar />
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>

              </div>

              {/* ITEMS */}

              <p className="orderItems">
                {itemsText}
              </p>

              {/* META */}

              <div className="orderMeta">

                <span className="orderPrice">
                  Rp {order.total.toLocaleString()}
                </span>

                <span className="orderItemCount">
                  <FiBox />
                  {order.items.length} items
                </span>

              </div>

            </div>

            {/* ACTION */}

            <div className="orderAction">

              <Link
                href={`/orders/${order.id}`}
                className="viewBtn"
              >
                View Details →
              </Link>

            </div>

          </div>

        )

      })}

    </div>

  )

}