import dateConverter from '../utils/dataConverter';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context';

// eslint-disable-next-line react/prop-types
const NakamuraButtons = ({ id, date }) => {
  const { selectedNakamuraData, setSelectedNakamuraData, nakamuraEvents } =
    useContext(DataContext);
  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (selected) {
      setSelectedNakamuraData([
        ...selectedNakamuraData,
        nakamuraEvents[id - 1],
      ]);
    } else {
      const events = selectedNakamuraData.filter((data) => data.id != id);
      setSelectedNakamuraData(events);
    }
  }, [selected]);

  const classNameOne = !selected
    ? 'relative w-full text-left text-white transition-colors duration-100 ease-in-out group-hover:text-gray-900'
    : 'relative w-full text-left text-gray-900';
  const classNameTwo = !selected
    ? 'absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-200 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'
    : 'absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-200 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 -translate-x-8';

  return (
    <div className="" onClick={clickHandler}>
      <div className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-md group w-full">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className={classNameTwo}></span>
        <span className={classNameOne}>{dateConverter(date)}</span>
        <span className="absolute inset-0 border-2 border-white rounded-md"></span>
      </div>
    </div>
  );
};

export default NakamuraButtons;
