import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ item: { name, time, text } }) => (
    <li className="clearfix">
        <div className="message-data align-right">
            <span className="message-data-time">{ time }</span> &nbsp; &nbsp;
            <span className="message-data-name">{ name }</span>
            <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
            { text }
        </div>
    </li>
);

Response.propTypes = {
    props: PropTypes.shape({
        item: PropTypes.shape({
            name: PropTypes.string,
            time: PropTypes.string,
            text: PropTypes.string
        })
    })
};

export default Response;

