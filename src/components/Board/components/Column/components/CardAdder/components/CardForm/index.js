import { useRef } from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Modal, Container } from 'reactstrap'
import { when } from '@services/utils'

function CardForm({ onConfirm, onCancel, serviceType }) {
  const inputCardTitle = useRef()
  const inputCardDescription = useRef()

  function addCard(event) {
    event.preventDefault()
    when(inputCardTitle.current.value)((value) => {
      onConfirm({ title: value, description: inputCardDescription.current.value })
    })
  }

  return (
    <>
      {serviceType === 'jobSeeker' ? (
        <>
          {/* 
			<div className='react-kanban-card-adder-form'>
			<form onSubmit={addCard}>
				<input
				className='react-kanban-card-adder-form__title'
				name='title'
				autoFocus
				defaultValue='Title'
				ref={inputCardTitle}
				/>
				<input
				className='react-kanban-card-adder-form__description'
				name='description'
				defaultValue='Description'
				ref={inputCardDescription}
				/>
				<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
				<button className='react-kanban-card-adder-form__button' type='submit'>
					Add
				</button>
				<button className='react-kanban-card-adder-form__button' type='button' onClick={onCancel}>
					Cancel
				</button>
				</div>
			</form>
			</div> */}

          <Modal isOpen={this.state.modal_center} toggle={this.tog_center} centered>
            <div className='modal-header'>
              <h5 className='modal-title mt-0'>Center Modal</h5>
              <button
                type='button'
                onClick={() => this.setState({ modal_center: false })}
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestib dulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.
              </p>
              <p className='mb-0'>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
          </Modal>
        </>
      ) : (
        <div className='react-kanban-card-adder-form'>
          <form onSubmit={addCard}>
            <input
              className='react-kanban-card-adder-form__title'
              name='title'
              autoFocus
              defaultValue='Title'
              ref={inputCardTitle}
            />
            <input
              className='react-kanban-card-adder-form__description'
              name='description'
              defaultValue='Description'
              ref={inputCardDescription}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
              <button className='react-kanban-card-adder-form__button' type='submit'>
                Add
              </button>
              <button className='react-kanban-card-adder-form__button' type='button' onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default CardForm
