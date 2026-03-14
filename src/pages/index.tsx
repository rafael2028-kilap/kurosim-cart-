import { usePlans } from "@/features/plans/hooks"
import PlanCard from "@/components/PlanCard/PlanCard"
import { useState } from "react"

export default function Home(){

  const { data: plans, isLoading } = usePlans()
  const [search, setSearch] = useState("")

  if(isLoading){

    return(

      <div className="container">

        <h1>Available Data Plans</h1>

        <p>Loading...</p>

      </div>

    )

  }

  /* FILTER SEARCH */

  const filteredPlans = (plans ?? []).filter(plan => {

    if(search === "") return true

    const keyword = search.toLowerCase()

    return (
      plan.country.toLowerCase().includes(keyword) ||
      plan.title.toLowerCase().includes(keyword)
    )

  })

  /* GROUP BY COUNTRY */

  const groupedPlans = filteredPlans.reduce((acc, plan) => {

    if(!acc[plan.country]){
      acc[plan.country] = []
    }

    acc[plan.country].push(plan)

    return acc

  }, {} as Record<string, typeof filteredPlans>)

  return(

    <div className="container">

      <h1>Available Data Plans</h1>

      {/* SEARCH */}

      <div className="planSearch">

        <input
          type="text"
          placeholder="Search country or plan..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      {/* COUNTRY GROUP */}

      {Object.entries(groupedPlans).map(([country, plans]) => (

        <div key={country} className="countryGroup">

          <h2 className="countryTitle">
            {country}
          </h2>

          <div className="grid">

            {plans.map(plan => (

              <PlanCard
                key={plan.id}
                plan={plan}
              />

            ))}

          </div>

        </div>

      ))}

    </div>

  )

}