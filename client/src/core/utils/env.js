const isDev = () => process.env.NODE_ENV === 'development';
const isBrowser = () => typeof window !== 'undefined' && window.document !== 'undefined';
export { isDev, isBrowser };
