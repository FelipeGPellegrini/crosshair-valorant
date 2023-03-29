import './App.css';
import InfoCrosshair from './components/InfoCrosshair';

function App() {
  return (
    <>
    <div className="App">
      <h1>CROSSHAIR VALORANT</h1>
      <InfoCrosshair player={"aspas"} img={"../crosshair/less-2023.jpg"} cod={"0;P;c;5;o;1;d;1;z;3;f;0;0b;0;1b;0"}/>
      <InfoCrosshair player={"cauanzin"} img={"../crosshair/cauanzin-2023.jpg"} cod={"0;P;h;0;0l;3;0o;2;0a;1;0f;0;1b;0"}/>
      <InfoCrosshair player={"Saadhak"} img={"../crosshair/saadhak-2023.jpg"} cod={"0;P;c;1;h;0;f;0;0l;4;0o;0;0a;1;0f;0;1b;0"}/>
      <InfoCrosshair player={"tuyz"} img={"../crosshair/tuyz-2023.jpg"} cod={"0;s;1;P;u;000000FF;h;0;f;0;m;1;0l;3;0v;3;0o;2;0a;1;0f;0;1b;0"}/>
      <InfoCrosshair player={"cNed"} img={"../crosshair/cned-2023.jpg"} cod={"0;P;c;1;u;7FFFD4FF;o;1;d;1;0b;0;1b;0"}/>
      <InfoCrosshair player={"Daveeyss"} img={"../crosshair/daveeyss-2023.jpg"} cod={"0;P;c;7;o;1;f;0;0t;1;0l;2;0o;2;0a;1;0f;0;1b;0"}/>
      <InfoCrosshair player={"pANcada"} img={"../crosshair/pancada-2023.jpg"} cod={"0;P;h;0;f;0;0l;3;0o;2;0a;1;0f;0;1b;0"}/>
      <InfoCrosshair player={"S0m"} img={"../crosshair/s0m.jpg"} cod={"0;P;h;0;f;0;0l;4;0a;1;0f;0;1b;0"}/>
      
    </div>
    <div>
      <p>Developed by <a target="_blank" href="https://github.com/FelipeGPellegrini" rel="noreferrer">Felipe Pellegrini</a></p>
    </div>
    </>
  );
}

export default App;
