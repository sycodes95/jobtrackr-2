// "nodes": [
//     {
//       "id": "Applied",
//       "nodeColor": "hsl(0, 0%, 0%)"
//     },
//     {
//       "id": "Rejected",
//       "nodeColor": "hsl(227, 70%, 50%)"
//     },
//     {
//       "id": "Interview",
//       "nodeColor": "hsl(264, 70%, 50%)"
//     },
//     {
//       "id": "Offer",
//       "nodeColor": "hsl(29, 70%, 50%)"
//     },
//     {
//       "id": "Ghosted",
//       "nodeColor": "hsl(29, 70%, 50%)"
//     },
//   ],

import { ApplicationDetails } from "@/app/applications/types/types";
import { SankeyNode } from "../constants";

export const generateSankeyNodes = ( apps: ApplicationDetails[] ) : SankeyNode[] => {  
  const nodes: SankeyNode[] = [];

  let applied = {
    node: { "id" : "Applied", "nodeColor": "hsl(0, 0%, 0%)"},
    length: 0
  };

  let rejected = {
    node: { "id" : "Rejected", "nodeColor": "hsl(227, 70%, 50%)"},
    length: 0
  };

  let interview = {
    node: { "id" : "Interview", "nodeColor": "hsl(264, 70%, 50%)"},
    length: 0
  };

  let offer = {
    node: { "id" : "Offer", "nodeColor": "hsl(29, 70%, 50%)"},
    length: 0
  };

  let ghosted = {
    node: { "id" : "Ghosted", "nodeColor": "hsl(29, 70%, 50%)"},
    length: 0
  };

  apps.forEach((app)=> {
    applied.length++
    if(app.rejected) rejected.length++
    if(app.interview_date) interview.length++
    if(app.offer_amount) offer.length++
    if(!app.rejected && !app.interview_date && !app.offer_amount) ghosted.length++
  })

  if(applied.length) nodes.push(applied.node)
  if(rejected.length) nodes.push(rejected.node)
  if(interview.length) nodes.push(interview.node)
  if(offer.length) nodes.push(offer.node)
  if(ghosted.length) nodes.push(ghosted.node)
  return nodes;

  
}