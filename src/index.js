// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { AppRegistry } from 'react-native'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('react-root') })
