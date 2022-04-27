export const formatedDate = (date: string) => {
  return date
    ? new Date(date).toLocaleDateString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
      })
    : null;
};
