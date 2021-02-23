import React, {useState, useRef} from 'react';
import './modal.css';

const Modal = props => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} Modal`}>
            <p>Meu modal!</p>
        </div>
    )
}

export default Modal;