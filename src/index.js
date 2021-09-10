import ReactDOM from 'react-dom';

import './index.css';        // This won't work in regular JS
import App from './App';

/* 'root' is found in the public/index.html file and is replaced by the <App /> component */
ReactDOM.render(<App />, document.getElementById('root'));
