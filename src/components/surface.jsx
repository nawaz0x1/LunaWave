import minerals from '../assets/minerals.png';
import moonSurface from '../assets/lunar_surface.jpg';
import BouguerDisturbances from '../assets/BouguerDisturbances.jpg';
import { useEffect } from 'react';
import SurfaceButtons from './surfaceButtons';
import mineralsStream from '../assets/minerals-stream.png';
import BouguerDisturbanceStream from '../assets/Bouguer-Disturbances-stream.png';

const Surface = ({ setSurface, surface }) => {
  useEffect(() => {
    setSurface(moonSurface);
  }, []);

  return (
    <>
      <div className="z-50 fixed right-3 top-3 p-4 border border-blue-600 rounded-lg text-blue-50">
        <SurfaceButtons
          setSurface={setSurface}
          surface={surface}
          textToShow={'Moon Surface'}
          surfaceName={moonSurface}
        />
        <SurfaceButtons
          setSurface={setSurface}
          surface={surface}
          textToShow={'Mineral composition'}
          surfaceName={minerals}
        />
        <SurfaceButtons
          setSurface={setSurface}
          surface={surface}
          textToShow={'Bouguer Disturbances'}
          surfaceName={BouguerDisturbances}
        />
      </div>
      <div className="z-50 fixed right-3 top-48 p-2">
        {surface == minerals && <img src={mineralsStream} className="h-20" />}
        {surface == BouguerDisturbances && (
          <img src={BouguerDisturbanceStream} className="h-16" />
        )}
      </div>
    </>
  );
};

export default Surface;
