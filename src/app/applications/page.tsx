

import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import FeedIcon from '@mui/icons-material/Feed';
import ApplicationForm from "./components/applicationForm";
import AppModal from "./components/appModal";




export default function Applications () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader title="Applications">
          <FeedIcon />
        </PageHeader>

        <AppModal />

      </div>
    </PageContainer>
  )
}