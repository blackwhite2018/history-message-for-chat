import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ item: { name, time, text } }) => (
    <li>
        <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i>{ name }</span>
            <span className="message-data-time">{ time }</span>
        </div>
        <div className="message my-message">
            { text }
        </div>
    </li>
);

Message.propTypes = {
    props: PropTypes.shape({
        item: PropTypes.shape({
            name: PropTypes.string,
            time: PropTypes.string,
            text: PropTypes.string
        })
    })
};

export default Message;

