

import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import FeedIcon from '@mui/icons-material/Feed';
import AppTable from "./components/appTable";

export default function Applications () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader title="Applications" description="Manage all of your job applications.">
          <FeedIcon fontSize="inherit" />
        </PageHeader>
        <AppTable />
      </div>
    </PageContainer>
  )
}
