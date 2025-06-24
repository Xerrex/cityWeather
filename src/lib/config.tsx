// export const APP_ENVIRONMENT = process.env.REACT_APP_APP_ENVIRONMENT ?? "DEV";
export const APP_ENVIRONMENT = import.meta.env.VITE_APP_ENVIRONMENT ?? "DEV";
export const API_ID = import.meta.env.VITE_API_ID;
export const DEFAULT_CITY= import.meta.env.VITE_DEFAULT_CITY ?? "Nairobi";
export const DEFAULT_UNITS = import.meta.env.VITE_DEFAULT_UNITS ?? "metric";
