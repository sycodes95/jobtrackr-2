import { ApplicationDetails } from "@/app/applications/types/types";
import { SankeyLink } from "../constants";

export const getAppliedGhosted = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const ghosted = apps.filter((app) => {
    if(!app.interview_date && !app.rejected && !app.offer_amount) {
      return app;
    }
  });
  if(ghosted.length > 0){
    return {
      "source": "Applied",
      "target": "Ghosted",
      "value": ghosted.length
    }

  }
  return
};

export const getAppliedRejected = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const rejected = apps.filter((app) => app.rejected && !app.interview_date);
  if(rejected.length > 0) {
    return {
      "source": "Applied",
      "target": "Rejected",
      "value": rejected.length
    }
  }
};

export const getAppliedInterview = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const interviews = apps.filter((app) => (app.interview_date));

  if(interviews.length > 0){
    return {
      "source": "Applied",
      "target": "Interview",
      "value": interviews.length
    }
  }
  return
};

export const getInterviewRejected = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const interviewRejections = apps.filter((app) => (app.interview_date && app.rejected));

  if(interviewRejections.length > 0) {
    return {
      "source": "Interview",
      "target": "Rejected",
      "value": interviewRejections.length
    }
  }
  return
};

export const getInterviewOffer = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const interviewOffers = apps.filter((app) => (app.interview_date && app.offer_amount));
  if(interviewOffers.length > 0) {
    return {
      "source": "Interview",
      "target": "Offer",
      "value": interviewOffers.length
    }
  }
  return
};

export const getOfferRejected = ( apps : ApplicationDetails[]) : SankeyLink | void => {
  const offerRejections = apps.filter((app) => (app.offer_amount && app.rejected));

  if(offerRejections.length > 0) {
    return {
      "source": "Offer",
      "target": "Rejected",
      "value": offerRejections.length
    }
  }

  return
};