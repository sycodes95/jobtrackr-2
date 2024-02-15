import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import SankeyDiagram from "./components/sankeyDiagram";
import TimelineIcon from '@mui/icons-material/Timeline';

export default function Insights () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full h-full">
        <PageHeader 
          title="Insights" 
          description="Advanced insights into your job applications."
        >
          <TimelineIcon fontSize="inherit" />
        </PageHeader>

        <div className="flex flex-col gap-8">
          <SankeyDiagram />
          
        </div>
      </div>
    </PageContainer>
  )
}