import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a heading string', () => {
 // create a fake dom
 const div = document.createElement('div');

 ReactDOM.render(<App />, div);
 // Looks inside of div
 // to know if the data is there
 
 expect(div.innerHTML).toContain('Comment Box');
 expect(div.innerHTML).toContain('Comment List');

 ReactDOM.unmountComponentAtNode(div);
});
