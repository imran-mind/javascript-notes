import React, {useRef,useEffect} from 'react';

const RefExample = () =>{
    const inputRef = useRef();
    
    useEffect(() => {
        inputRef.current.focus();
      }, []);

    const onTextSelect = (e)=>{
        e.preventDefault();
        inputRef.current?.select();
    }

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={onTextSelect}>Select Text</button>
        </div>
    )
}
export default RefExample;