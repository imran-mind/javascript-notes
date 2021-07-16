import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Hello from './Hello';
let container = null;

beforeEach(()=>{
    // setup a dom element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(()=>{
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render with or without name ",()=>{
    act(()=>{
        render(<Hello/>, container);
    });
    expect(container.textContent).toBe('Hey, Stranger');

    act(()=>{
        render(<Hello name="imran"/>,container);
    });
    expect(container.textContent).toBe('Hello , imran');

    act(()=>{
        render(<Hello name="amir"/>,container);
    });
    expect(container.textContent).toBe('Hello , amir');
})