import {
  GET_LEADS,
  GET_LEAD,
  CREATE_LEAD,
  UPDATE_LEAD,
  REMOVE_LEAD,
  LEAD_ERRORS
} from '../actions/types';

const initialState = {
  loading: true,
  leads: [],
  lead: null,
  errors: []
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload,
        loading: false
      };

    case GET_LEAD:
      return {
        ...state,
        lead: payload,
        loading: false
      };
    
    case CREATE_LEAD:
      return {
        ...state,
        leads: [ payload, ...state.leads ],
        loading: false
      };

    case UPDATE_LEAD:
      return {
        ...state,
        leads: [ 
          state.leads.map(
            lead => lead.id === payload.id ? payload.lead : lead
          )
        ],
        loading: false
      };

    case REMOVE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== payload),
        loading: false
      };

    case LEAD_ERRORS:
      return {
        ...state,
        errors: payload,
        loading: false
      };
  
    default:
      return state;
  }
};