//import both components
import React from 'react';
import ClickIncrease from './ClickIncrease';
import HoverIncrease from './HoverIncrease';
export default function Parent() {
    return (
        <div className="App">
            {/*Render both of these components to the UI */}
            <ClickIncrease/>
            <HoverIncrease/>
        </div>
    );
}
