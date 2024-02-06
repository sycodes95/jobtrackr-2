
import { ApplicationDetails } from "@/app/applications/types/types";
import { SankeyNode } from "../constants";

export const generateSankeyNodes = ( apps: ApplicationDetails[] ) : SankeyNode[] => {  
  const nodeTemplates: { [key: string]: { id: string; nodeColor: string; count: number } } = {
    "Applied": { id: "Applied", nodeColor: "hsl(0, 0%, 0%)", count: 0 },
    "Rejected": { id: "Rejected", nodeColor: "hsl(227, 70%, 50%)", count: 0 },
    "Interview": { id: "Interview", nodeColor: "hsl(264, 70%, 50%)", count: 0 },
    "Offer": { id: "Offer", nodeColor: "hsl(29, 70%, 50%)", count: 0 },
    "Ghosted": { id: "Ghosted", nodeColor: "hsl(29, 70%, 50%)", count: 0 }
  };

  apps.forEach(app => {
    nodeTemplates["Applied"].count++; 
    if (app.rejected) nodeTemplates["Rejected"].count++;
    if (app.interview_date) nodeTemplates["Interview"].count++;
    if (app.offer_amount) nodeTemplates["Offer"].count++;
    if (!app.rejected && !app.interview_date && !app.offer_amount) nodeTemplates["Ghosted"].count++;
  });

  return Object.values(nodeTemplates)
    .filter(template => template.count > 0)
    .map(({ id, nodeColor }) => ({ id, nodeColor }));
  
}