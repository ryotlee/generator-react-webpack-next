import App from './components/App.jsx';
var React = require('react')
var ReactDOM = require('react-dom')
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const NextRootContainer = require('./components/App.jsx').default;
    render(NextRootContainer);
  });
}
