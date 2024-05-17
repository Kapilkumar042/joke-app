import React from 'react'
import NewOverview from '~/components/newdashboard/newoverview'
import {data} from "~/components/newdashboard/overviewData"
export default function OverviewContainer() {
  return (
    <div>
        <NewOverview data={data}/>
    </div>
  )
}
