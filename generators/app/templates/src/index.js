import App from './components/App.jsx';
var ReactDOM = require('react-dom');

const render = Component => {
  ReactDOM.render(
    <Component />,document.getElementById('root')
  );
}
render(App);
