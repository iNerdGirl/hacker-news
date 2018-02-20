import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Best from './BestStories';
import New from './NewStories';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return <BrowserRouter>
      <div>
        <Route path="/top" component={App} />
        <Route path="/best" component={Best} />
        <Route path="/new" component={New} />
      </div>
    </BrowserRouter>;
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
