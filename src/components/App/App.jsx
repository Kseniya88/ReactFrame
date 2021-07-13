import React from 'react';
import { Message } from '../Messages';



const App = () => {
    //return React.createElement('div', { id: 'test-id' }, 'Hello from React');
    return <div id='test-id'>
        <h2 className='style-app'>Hello from React</h2>
        <Message text="My new message" />
    </div>
};

export default App;