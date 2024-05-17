import React from 'react'
import ReportSectionRoute from '~/components/newdashboard/report-section-v2'
import {data} from "~/components/newdashboard/reportData"
export default function ReportIndex() {
  return (
    <div>
        <ReportSectionRoute data={data}/>
    </div>
  )
}
