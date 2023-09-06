import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SplitFactory } from '@splitsoftware/splitio-react';
import './index.css';
import sdkConfig from './sdkConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Este componente es el que nos permitirá utilizar Split dentro de la aplicación, debemos pasarle la configuración que realizamos en el sdkConfig
  <SplitFactory config={sdkConfig} updateOnSdkTimedout={true} >
    {({ isReady }) => {
      // isReady nos permite renderizar otro componente mientras el SDK aun no esta listo
      if (!isReady) return (<div>Cargando SDK ...</div>);
      return <App />
    }}
  </SplitFactory>


);

reportWebVitals(console.log);
