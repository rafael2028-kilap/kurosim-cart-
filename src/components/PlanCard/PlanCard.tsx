import { useState } from "react"
import { Plan } from "@/features/plans/types"
import PlanModal from "../PlanModal/PlanModal"

interface Props{
  plan:Plan
}

export default function PlanCard({plan}:Props){

  const [open,setOpen] = useState(false)

  return(

    <>

      <div className="planCard">

        <span className="planCountry">
          🌍 {plan.country}
        </span>

        <h3 className="planTitle">
          {plan.title}
        </h3>

        <div className="planInfo">

          <span>
            📶 {plan.data}
          </span>

          <span>
            ⏱ {plan.duration} Days
          </span>

        </div>

        <div className="planFooter">

          <strong>
            Rp {plan.price.toLocaleString()}
          </strong>

          <button
            className="planButton"
            onClick={()=>setOpen(true)}
          >
            Select Plan
          </button>

        </div>

      </div>

      {open && (

        <PlanModal
          plan={plan}
          onClose={()=>setOpen(false)}
        />

      )}

    </>

  )

}