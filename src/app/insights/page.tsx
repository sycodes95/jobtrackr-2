import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import SankeyDiagram from "./components/sankeyDiagram";

export default function Insights () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full h-full">
        <PageHeader 
          title="Insights" 
          description="Advanced insights into your job applications."
        />

        <div className="flex flex-col gap-8">
          <SankeyDiagram />
          
        </div>
      </div>
    </PageContainer>
  )
}