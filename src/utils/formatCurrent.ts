const formatCurrency = (current: number): string => {
  return current.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};

export default formatCurrency;
