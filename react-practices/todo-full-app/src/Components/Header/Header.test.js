import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import Header from './Header';

let container = null;

beforeEach(()=>{
    container = document.createElement('div');
    document.body.appendChild(container)
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container =null;
});

it('render Headr name with "ToDo App"',()=>{
    act(()=>{
        render(<Header/>,container);
    });
    expect(container.textContent).toBe('ToDo App')
})
