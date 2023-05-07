import './App.css';
import Parent from './components/Parent';

//https://blog.logrocket.com/understanding-react-higher-order-components/#:~:text=According%20to%20React's%20documentation%2C%20a,const%20newComponent%20%3D%20higherFunction(WrappedComponent)%3B
function App() {
  return (
    <div className="App">
      <h1>HOC example</h1>
      {/* <Home label="home-label"/>
      <About label="about-label"/>  */}
      <Parent/>
    </div>
  );
}

export default App;
