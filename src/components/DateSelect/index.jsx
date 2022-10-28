import { addDays, subDays, format, formatISO, compareAsc, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Icon } from "~/components/Icon"

export const DateSelect = ({ currentDate, onChange }) => {
  
  if ( compareAsc(parseISO(currentDate), new Date(2022, 10, 20)) !== 1 ) {
    var currentDate = formatISO(new Date(2022, 10, 20))
  } else if ( compareAsc(parseISO(currentDate), new Date(2022, 11, 2)) === 1 ) {
    var currentDate = formatISO(new Date(2022, 11, 2))
  }
    
  const date = new Date(currentDate)

  const prevDay = () => {
    const prevDay = subDays(date, 1);
    onChange(formatISO(prevDay))
  }
  const nextDay = () => {
    const nextDay = addDays(date, 1);
    onChange(formatISO(nextDay))
  }

  return (
    <div className="flex space-x-4 items-center justify-center p-4" disabled={true}>
      {
        compareAsc(parseISO(currentDate), new Date(2022, 10, 20)) !== 0 &&
        <Icon name="arrowLeft" className="w-6 text-red-500 cursor-pointer" onClick={prevDay}/>
      }
      <span className="font-bold">{format(date, "d 'de' MMMM", {locale: ptBR})}</span>
      {
        compareAsc(parseISO(currentDate), new Date(2022, 11, 2)) !== 0 &&
        <Icon name="arrowRight" className="w-6 text-red-500 cursor-pointer" onClick={nextDay}/>
      }
    </div>
  )
}