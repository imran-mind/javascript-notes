import React, {useState} from "react";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
  //render OriginalComponent and pass on its props.
    return <OriginalComponent
                counter={counter} //export our counter hook
                incrementCounter={()=> setCounter((counter)=> counter + 1)}
                name="LogRocket"
           />;
  }
  return NewComponent;
};
export default UpdatedComponent;