import { useContext } from 'react';
import { DataContext } from '../context';
import dateConverter from '../utils/dataConverter';

const NakamuraInfo = () => {
  const { selectedNakamuraData } = useContext(DataContext);
  const data = selectedNakamuraData[selectedNakamuraData.length - 1];
  if (!data) return;
  return (
    <div className="z-50 fixed right-3 bottom-3 p-4 border border-blue-600 rounded-lg">
      <div className=" text-blue-50 text-xl font-bold">
        <span>Date : {dateConverter(data.date)}</span>
        <br />
        <span>Time : {data.date.slice(-8)}</span>
        <br />
        <span>Latitude : {data.lat}</span>
        <br />
        <span>Latitude : {data.lng}</span>
        <br />
        <span>Magnitude : {data.magnitude}</span>
        <br />
      </div>
    </div>
  );
};

export default NakamuraInfo;
