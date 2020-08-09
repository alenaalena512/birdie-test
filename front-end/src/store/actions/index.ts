export const fetchCareRecipients = () => ({
    type: 'FETCH_CARE_RECIPIENTS',
});

export const fetchEvents = (id: string) => ({
    type: 'FETCH_EVENTS',
    payload: id
});