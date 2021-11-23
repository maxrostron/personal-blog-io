const getHostName = () => {
  if (process.env.NODE_ENV === "development") return process.env.CLIENT_URL;
  return "http://www.maxrostron.com";
};

export default getHostName;
