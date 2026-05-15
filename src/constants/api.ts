// API related constants
// export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.azentiqlabs.com';
export const API_TIMEOUT = 10000;
export const API_RETRY_ATTEMPTS = 3;

export const API_ENDPOINTS = {
  CONTACT: '/contact',
  NEWSLETTER: '/newsletter',
  PROJECTS: '/projects',
  SERVICES: '/services',
  TESTIMONIALS: '/testimonials',
  ANALYTICS: '/analytics',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export const API_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ACCEPT: 'Accept',
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
} as const;