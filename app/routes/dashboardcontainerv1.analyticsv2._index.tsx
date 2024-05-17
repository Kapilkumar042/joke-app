import React from 'react'
import AnalyticsRoute from '~/components/newdashboard/analytics-v2'
import {data} from "~/components/newdashboard/analyticsV2Data"
export default function AnalyticsIndex() {
  return (
    <div>
        <AnalyticsRoute data={data}/>
    </div>
  )
}
