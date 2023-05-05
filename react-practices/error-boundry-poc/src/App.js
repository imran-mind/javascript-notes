import './App.css';
import { Counter } from './Counter';
import ErrorBoundry from './ErrorBoundry';

function App() {
  return (
    <div className="App">
      <h1>Error Boundry POC</h1>
      <ErrorBoundry>
        <Counter/>
      </ErrorBoundry>
    </div>
  );
}

export default App;
