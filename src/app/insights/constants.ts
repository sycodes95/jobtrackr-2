
export interface DefaultSankeyData {
  "nodes" : {
    "id": string;
    "nodeColor" : string;
  }[],
  "links" : {
    "source": string;
    "target" : string;
    "value": number;
  }[],

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
      "value": 55
    },
    {
      "source": "Applied",
      "target": "Rejected",
      "value": 61
    },
    {
      "source": "Applied",
      "target": "Interview",
      "value": 94
    },
    {
      "source": "Interview",
      "target": "Rejected",
      "value": 195
    },
    {
      "source": "Interview",
      "target": "Offer",
      "value": 85
    },
    {
      "source": "Offer",
      "target": "Rejected",
      "value": 5
    },
    
  ]
}