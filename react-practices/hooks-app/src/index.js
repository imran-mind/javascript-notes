import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import CustomeHooks from './components/customeHook';
import User from './components/User';
import TestCustomeHook from './components/TestCustomeHook';
import NewComp from './components/NewComp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseMemoExample/> */}
    {/* <ErrorBoundary> */}
      {/* <UseCallbackExample/> */}
      {/* <BuggyCounter/> */}
      {/* <App/> */}
      {/* <CustomeHooks/> */}
      {/* <User/> */}
    {/* </ErrorBoundary> */}
    {/* <TestCustomeHook/> */}
    <NewComp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
