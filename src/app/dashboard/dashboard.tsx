
import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import AppCalendar from "./components/appCalendar";
import Metrics from "./components/metrics";

import GridViewIcon from '@mui/icons-material/GridView';
import UpcomingInterviews from "./components/upcomingInterviews";
import OfferList from "./components/offerList";

export default function Dashboard () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full h-full">
        <PageHeader 
          title="Dashboard" 
          description="Overview of your job application metrics."
        >
          <GridViewIcon fontSize="inherit" />
        </PageHeader>
        <div className="flex flex-col gap-8 w-full h-full">
          <Metrics />
          <AppCalendar />
        </div>
        <div className="flex flex-col  lg:flex-row gap-8 w-full h-full">
          <UpcomingInterviews />
          <OfferList />
        </div>
      </div>
    </PageContainer>
  )
}