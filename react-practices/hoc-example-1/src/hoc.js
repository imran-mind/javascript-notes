import React from 'react';

// DRY
const hoc = (WrappedComponent)=>{
    const newComponent = (props)=>{
        return(
            <div style={{'backgroundColor':'pink'}}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
    return newComponent;
}
export default hoc;