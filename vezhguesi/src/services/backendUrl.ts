let API_URL: string;

if (import.meta.env.VITE_NODE_ENV === 'stage' && import.meta.env.VITE_API_URL_STAGE) {
    API_URL = import.meta.env.VITE_API_URL_STAGE;
} else if (import.meta.env.VITE_NODE_ENV === 'test' && import.meta.env.VITE_API_URL_TEST) {
    API_URL = import.meta.env.VITE_API_URL_TEST;
} else {
    API_URL = "http://localhost:3001/api";
}

export { API_URL }; 