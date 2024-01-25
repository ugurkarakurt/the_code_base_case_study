const parseISODate = (isoDateString) => {
  return new Date(isoDateString);
};

export const formatToCustomDate = (date) => {
  const isoDate = parseISODate(date)
  const day = isoDate.getDate();
  const month = isoDate.getMonth() + 1;
  const year = isoDate.getFullYear();
  const hour = isoDate.getHours();
  const minute = isoDate.getMinutes();
  return `${month}.${day}.${year} ${hour}:${minute}`;
};

