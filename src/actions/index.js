import axios from 'axios';

export const FETCH_CALENDAR_DATA = 'FETCH_CALENDAR_DATA';

const CALENDAR_URL = 'http://localhost:3000/eventHR';
const ROOT_URL = 'http://api.themoviedb.org/3/movie/';
const API_KEY = 'f40bb4460c5fd3208bf382531a59218a';

export function fetchCalendarData() {
  const request = axios.get(CALENDAR_URL);
  return {
    type: FETCH_CALENDAR_DATA,
    payload: request
  };
}
