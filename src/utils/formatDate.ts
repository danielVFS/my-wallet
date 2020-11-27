import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt";

const formatDate = (date: string): string => {
  const parseDate = parseISO(date);

  const formattedDate = format(parseDate, "dd/MM/yyyy", {
    locale: pt,
  });

  return formattedDate;
};

export default formatDate;
