import React from 'react';

const hoc = (WrappedComonent) =>{
    console.log('WrappedComonent ',WrappedComonent)
    const newComponent = (props) =>{
        console.log('hoc props ',props)
        return (
            <div style={{'backgroundColor': 'pink'}}>
                <WrappedComonent {...props} hocValue='10'/>
            </div>
        )
    }
    return newComponent;
}

export default hoc;