import { initialState } from '..';

export type RootState = {
    events: any[];
    isLoading: boolean;
    careRecipients: string[]
};

export const rootReducer = (state: RootState = initialState, action: any): RootState => {
    switch (action.type) {
        case 'FETCH_EVENTS': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'FETCH_COMPLETED': {
            return {
                ...state,
                events: action.payload,
                isLoading: false
            };
        }
        case 'FETCH_CARE_RECIPIENTS': {
            return {
                ...state
            };
        }
        case 'FETCH_RECIPIENTS_COMPLETED': {
            return {
                ...state,
                careRecipients: action.payload
            };
        }
        default:
            return state;
    }
};