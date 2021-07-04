import React,{useState,useMemo,useEffect} from 'react';

export default function UseMemoExample(){
    const [number,setNumber] = useState(0);

    const [dark,setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return expensiveFunction(number);
    },[number]);
    // const doubleNumber = expensiveFunction(number);
    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    // useEffect(()=>{
    //     console.log('useEffect')
    // },[])
    return(
        <div style={{'margin':'20px'}}>
            <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))}/>
            <br></br>
            <button onClick={()=>setDark(prevState => !prevState)}>Change Theme</button>
            <div style={themeStyle}>
                {doubleNumber}
            </div>
            { console.log('rerendering')}
        </div>
    )
}

function expensiveFunction(num){
    console.log('slow function')
    for(let i=0; i<1000000000; i++){}
    return num*2;
}