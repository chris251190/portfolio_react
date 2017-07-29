import React from 'react';

import { render } from 'react-dom';


// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/portfolio/Single';
import ProjectGrid from './components/portfolio/ProjectGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import Blog from './components/blog/Blog';
import About from './components/about/About';


const router = (
    <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
    <IndexRoute component={ProjectGrid}/>
    <Route path="/view/:postId" component={Single}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/about" component={About}/>
    </Route>
    </Router>
    </Provider>
)

render(router, document.getElementById('root'));
