import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import  {addProduct, increment} from "./Redux/Actions/action";
import './App.css';
   

function App() {
    const [productName,setProduct] = useState('');
    const dispatch = useDispatch();
    const counterReducer = useSelector(state => state.counterReducer); // for getting state
    const productReducer = useSelector(state=> state.productReducer); // for getting actions call
    const {products} = productReducer;
    
    const click = () =>{
      dispatch(increment(1));
    }

    const createProduct = (e) =>{
      if(e.key == 'Enter'){
        dispatch(addProduct(productName));
        setProduct('')
      }
    }
    
    return ( 
      <div>
        <button onClick={click}>Counter</button>
        {counterReducer?.counter}
        <input
          value={productName}
          type="text"
          onChange={(e)=>setProduct(e.target.value)}
          onKeyDown={(e)=>createProduct(e)}/>
        <ul>
          {
            products.map((item,i)=>{
              return <li key={i}>{item}</li>
            })
          }
        </ul>
      </div>   
    );
}

export default App;