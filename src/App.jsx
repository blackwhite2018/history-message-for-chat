import React from 'react';
import MessageHistory from './components/MessageHistory/MessageHistory';
import MessageStore from './components/MessageHistory/MessageStore';
import './css/main.css';

const App = () => (
	<div className="clearfix container">
    	<div className="chat">
        	<div className="chat-history">
          		<MessageHistory list={ MessageStore } />
        	</div>
    	</div>  
	</div>
);

export default App;
