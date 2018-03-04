import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import app from './routes';

ReactDOM.render(
  app,
  document.getElementById('root')
);
registerServiceWorker();
