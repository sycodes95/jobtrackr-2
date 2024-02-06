import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CreateIcon from '@mui/icons-material/Create';
import ChatIcon from '@mui/icons-material/Chat';
import PaidIcon from '@mui/icons-material/Paid';
import { FaGhost } from "react-icons/fa";


export interface SankeyData {
  "nodes" : SankeyNode[],
  "links" : SankeyLink[],
}

export type SankeyNode = {
  "id": string;
  "nodeColor" : string;
}

export type KeyStringString = {
  [key : string] : string
}

export type SankeyLink = {
  "source": string;
  "target" : string;
  "value": number;
}

export const SankeyData: SankeyData = {
  "nodes": [
    {
      "id": "Applied",
      "nodeColor": "hsl(0, 0%, 0%)"
    },
    {
      "id": "Rejected",
      "nodeColor": "hsl(227, 70%, 50%)"
    },
    {
      "id": "Interview",
      "nodeColor": "hsl(264, 70%, 50%)"
    },
    {
      "id": "Offer",
      "nodeColor": "hsl(29, 70%, 50%)"
    },
    {
      "id": "Ghosted",
      "nodeColor": "hsl(29, 70%, 50%)"
    },
  ],
  "links": [
    {
      "source": "Applied",
      "target": "Ghosted",
      "value": 0
    },
    {
      "source": "Applied",
      "target": "Rejected",
      "value": 0
    },
    {
      "source": "Applied",
      "target": "Interview",
      "value": 0
    },
    {
      "source": "Interview",
      "target": "Rejected",
      "value": 0
    },
    {
      "source": "Interview",
      "target": "Offer",
      "value": 0
    },
    {
      "source": "Offer",
      "target": "Rejected",
      "value": 0
    },
    
  ]
}

export const demoSankeyLinks: SankeyLink[] = [
  {
    "source": "Applied",
    "target": "Ghosted",
    "value": 325
  },
  {
    "source": "Applied",
    "target": "Rejected",
    "value": 122
  },
  {
    "source": "Applied",
    "target": "Interview",
    "value": 42
  },
  {
    "source": "Interview",
    "target": "Rejected",
    "value": 33
  },
  {
    "source": "Interview",
    "target": "Offer",
    "value": 4
  },
  {
    "source": "Offer",
    "target": "Rejected",
    "value": 2
  },
  
];

export const demoApplicationsLength = 528;

export const legendColors: {[key:string] : string} = {
  "Applied": "#e8c1a0",
  "Rejected": "#f47560",
  "Interview": "#f1e15b",
  "Offer": "#e8a838",
  "Ghosted": "#61cdbb",
}


export const legendData: {[key:string] : {
  textColor: string;
  icon: React.ReactNode
}} = {
  "Applied": {
    textColor: "text-[#e8c1a0]",
    icon: <CreateIcon className='text-[#e8c1a0] text-sm' />
  },
  "Rejected": {
    textColor: "text-[#f47560]",
    icon: <ThumbDownOffAltIcon className='text-[#f47560] text-sm' />
  },
  "Interview": {
    textColor: "text-[#f1e15b]",
    icon: <ChatIcon className='text-[#f1e15b] text-sm' />
  },
  "Offer": {
    textColor: "text-[#e8a838]",
    icon: <PaidIcon className='text-[#e8a838] text-sm' />
  },
  "Ghosted": {
    textColor: "text-[#61cdbb]",
    icon: <FaGhost className='text-[#61cdbb] text-sm' />
  },
}

