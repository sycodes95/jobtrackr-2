

import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import FeedIcon from '@mui/icons-material/Feed';
import AppModal from "./components/appModal";
import AppTable from "./components/appTable";
export default function Applications () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader title="Applications">
          <FeedIcon />
        </PageHeader>
        <AppModal />
        <AppTable />
      </div>
    </PageContainer>
  )
}