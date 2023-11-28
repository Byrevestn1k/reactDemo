import { useState } from 'react';
import './modal.css'
import { createPortal } from "react-dom";

let portalElement = document.querySelector('#portal')

const Modal = () => {

	const onCloseModal = () => {
		setShowModal(false)
	}
	const [showModal, setShowModal] = useState(true)
	let modalContent = (
		<div className='commonportal'>
			<div> Modal</div>
			<button type='button' className='button-modal' onClick={onCloseModal}>close modal </button>
		</div>
	)


	return showModal ? createPortal(modalContent, portalElement) : null;
}

export default Modal;
