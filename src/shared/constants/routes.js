// routes
export const QUESTION_DETAILS_PAGE = 'question'

// config
export const APP_BASE_URL = 'karnameh-assessment'
export const appBaseUrl = process.env.NODE_ENV === "development" ? "/" : `/${APP_BASE_URL}/`;
