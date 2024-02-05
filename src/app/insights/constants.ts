
export interface DefaultSankeyData {
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

export const defaultSankeyData: DefaultSankeyData = {
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

export const legendColors: {[key:string] : string} = {
  "Applied": "#e8c1a0",
  "Rejected": "#f47560",
  "Interview": "#f1e15b",
  "Offer": "#e8a838",
  "Ghosted": "#61cdbb",
}
