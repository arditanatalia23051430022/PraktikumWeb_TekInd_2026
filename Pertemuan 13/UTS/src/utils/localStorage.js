export const getProductions = () => {
  return (
    JSON.parse(
      localStorage.getItem("productions")
    ) || []
  );
};

export const saveProductions = (data) => {
  localStorage.setItem(
    "productions",
    JSON.stringify(data)
  );
};