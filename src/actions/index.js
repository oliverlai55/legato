import axios from 'axios';

export const FETCH_CALENDAR_DATA = 'FETCH_CALENDAR_DATA';

const CALENDAR_URL = 'localhost:3000';

export function fetchCalendarData() {
  const request = axios.get({CALENDAR_URL});

  return {
    type: FETCH_CALENDAR_DATA,
    payload: request
  };
}
