import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import FeedIcon from '@mui/icons-material/Feed';
import CreateNew from "./components/createNew";
export default function Applications () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader title="Applications">
          <FeedIcon />
        </PageHeader>

        <CreateNew />
      </div>
    </PageContainer>
  )
}