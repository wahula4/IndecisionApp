import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    // true boolean converts a string to true and undefined to false
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;