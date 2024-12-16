let MAIN_API_URL: string;
let ORG_API_URL: string;

if (
  import.meta.env.VITE_NODE_ENV === "stage" &&
  import.meta.env.VITE_API_URL_STAGE
) {
  ORG_API_URL = import.meta.env.VITE_ORG_SERVICE_URL_STAGE;
  MAIN_API_URL = import.meta.env.VITE_API_URL_STAGE;
} else if (
  import.meta.env.VITE_NODE_ENV === "test" &&
  import.meta.env.VITE_API_URL_TEST
) {
  MAIN_API_URL = import.meta.env.VITE_API_URL_TEST;
  ORG_API_URL = import.meta.env.VITE_ORG_SERVICE_URL_TEST;
} else {
  MAIN_API_URL = "http://localhost:3001/api";
  ORG_API_URL = "http://localhost:3002/api";
}

export { MAIN_API_URL, ORG_API_URL };
