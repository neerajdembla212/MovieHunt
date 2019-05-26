import React from 'react';
import Modal from 'react-responsive-modal';

const ReactModal = props => {
    return (
        <Modal open={props.open} onClose={props.onClose} center>
            {props.children}
        </Modal>

    )
};

export default ReactModal;