import Globe from 'react-globe.gl';
import bumpmap from './assets/lunar_bumpmap.jpg';
import moonLandingData from './data/moon_landings.json';
import Nakamura from './components/nakamura';
import Option from './components/option';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './context';
import Timeline from './components/timeline';
import NakamuraInfo from './components/nakamuraInfo';
import Surface from './components/surface';

function App() {
  const { selectedNakamuraData } = useContext(DataContext);
  const [window, setWindow] = useState('nakamura');
  const [surface, setSurface] = useState();

  useEffect(() => {}, [selectedNakamuraData]);

  return (
    <main className="h-screen w-full duration-200 relative">
      <Option window={window} setWindow={setWindow} />
      {window == 'nakamura' ? <Nakamura /> : <Timeline />}
      <NakamuraInfo />
      <Surface setSurface={setSurface} surface={surface} />
      <Globe
        globeImageUrl={surface}
        bumpImageUrl={bumpmap}
        backgroundImageUrl={
          'https://www.unpkg.com/three-globe/example/img/night-sky.png'
        }
        showGraticules={false}
        showAtmosphere={false}
        labelText={'label'}
        labelSize={2.0}
        labelDotRadius={0.4}
        labelColor={() => '#e63737'}
        labelLabel={(d) => `
        <div><b>${d.label}</b></div>
        <div>${d.agency} - ${d.program} Program</div>
        <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
      `}
        labelsData={moonLandingData}
        ringsData={selectedNakamuraData}
        ringMaxRadius={(d) => {
          return 7 * d['magnitude'];
        }}
        ringRepeatPeriod={300}
        ringPropagationSpeed={5}
        ringColor={['#FF9800', '#FF9800', '#FF9800', '#FFFF00']}
      />
    </main>
  );
}

export default App;
