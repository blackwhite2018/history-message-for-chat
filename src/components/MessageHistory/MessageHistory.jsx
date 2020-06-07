import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';
import Response from './Response/Response';
import Typing from './Typing/Typing';

const MessageHistory = ({ list }) => (
    <ul>
        {
            list.map(({ id, from: { name }, type, time, text }) => {
                let component;
                const newObj = {name, time, text};
                
                switch(type) {
                    case 'message':
                        component = <Message key={ id } item={ newObj } />;
                        break;
                    case 'response':
                        component = <Response key={ id } item={ newObj } />;
                        break;
                    case 'typing':
                        component = <Typing key={ id } />;
                }

                return component;
            })
        }
    </ul>
);

MessageHistory.defaultProps = {
    list: PropTypes.array
};

MessageHistory.propTypes = {
    props: PropTypes.shape({
        list: PropTypes.array
    })
};

export default MessageHistory;

