const getHostName = () => {
  if (process.env.NODE_ENV === "development") return process.env.CLIENT_URL;
  return req.headers.host;
};

export default getHostName;
