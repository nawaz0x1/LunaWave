import NakamuraButtons from './nakamura-buttons';
import { DataContext } from '../context';
import { useContext } from 'react';

const Nakamura = () => {
  const { nakamuraEvents } = useContext(DataContext);
  return (
    <>
      <div className="z-50 fixed top-14 left-1 ">
        <div className="bg-sky-800 p-1 w-full max-h-screen overflow-scroll overflow-x-hidden scroll-smooth relative">
          <div>
            {nakamuraEvents.map((data) => {
              return (
                <NakamuraButtons id={data.id} key={data.id} date={data.date} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nakamura;
