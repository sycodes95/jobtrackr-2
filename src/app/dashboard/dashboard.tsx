import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import AppCalendar from "./components/appCalendar";
import Metrics from "./components/metrics";

import GridViewIcon from '@mui/icons-material/GridView';

export default function Dashboard () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader 
          title="Dashboard" 
          description="Overview of your job application metrics."
        >
          <GridViewIcon />
        </PageHeader>
        <div className="flex flex-col gap-8 w-full h-full">
          <Metrics />
          <AppCalendar />
        </div>
      </div>
    </PageContainer>
  )
}