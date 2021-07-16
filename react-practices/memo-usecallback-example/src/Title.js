import React from 'react';

const Title = () =>{
    console.log('Title rerendering')
    return <h2>useCallback Demo</h2>
}

export default React.memo(Title);