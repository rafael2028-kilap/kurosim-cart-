import { usePlans } from "@/features/plans/hooks"
import PlanCard from "@/components/PlanCard/PlanCard"

export default function Home(){

  const {data:plans,isLoading} = usePlans()

  if(isLoading){

    return(

      <div className="container">

        <h1>Available Data Plans</h1>

        <p>Loading...</p>

      </div>

    )

  }

  return(

    <div className="container">

      <h1>Available Data Plans</h1>

      <div className="grid">

        {plans?.map(plan=>(

          <PlanCard
            key={plan.id}
            plan={plan}
          />

        ))}

      </div>

    </div>

  )

}