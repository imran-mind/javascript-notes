import React from 'react';

class MyComp extends React.Component{
    state={
        count:0
    }

    render(){
        console.log('MyComp Rendering')
        return(
            <div>
                <h2>Counter Component </h2>
                {this.state.count}
            </div>
        )
    }
}

export default MyComp