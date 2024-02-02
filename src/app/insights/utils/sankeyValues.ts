import { ApplicationDetails } from "@/app/applications/types/types";
import { SankeyLink } from "../constants";

export const getAppliedGhosted = ( apps : ApplicationDetails[]) : SankeyLink => {
  const ghosted = apps.filter((app) => {
    if(!app.interview_date && !app.rejected && !app.offer_amount) {
      return app;
    }
  });

  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": ghosted.length
  }
};

export const getAppliedRejected = ( apps : ApplicationDetails[]) : SankeyLink => {
  const rejected = apps.filter((app) => app.rejected);
  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": rejected.length
  }
};

export const getAppliedInterview = ( apps : ApplicationDetails[]) : SankeyLink => {
  const interviews = apps.filter((app) => (app.interview_date));
  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": interviews.length
  }
};

export const getInterviewRejected = ( apps : ApplicationDetails[]) : SankeyLink => {
  const interviewRejections = apps.filter((app) => (app.interview_date && app.rejected));
  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": interviewRejections.length
  }
};

export const getInterviewOffer = ( apps : ApplicationDetails[]) : SankeyLink => {
  const interviewOffers = apps.filter((app) => (app.interview_date && app.offer_amount));
  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": interviewOffers.length
  }
};

export const getOfferRejected = ( apps : ApplicationDetails[]) : SankeyLink => {
  const offerRejections = apps.filter((app) => (app.offer_amount && app.rejected));
  return {
    "source": "Applied",
    "target": "Ghosted",
    "value": offerRejections.length
  }
};