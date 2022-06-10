import { useRef } from 'react'
import { Modal, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { when } from '@services/utils'

function CardForm({ onConfirm, onCancel, serviceType }) {
  const inputCardTitle = useRef()
  const inputCardDescription = useRef()
  const openModal = true

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

          <Modal isOpen={openModal} toggle={onCancel} centered>
            <div className='modal-header'>
              <h5 className='modal-title mt-0 text-center'>Add Job</h5>
              {/* <button type='button' onClick={onCancel} className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button> */}
            </div>
            <div className='modal-body'>
              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Job Title</Label>
                  <Input
                    className='react-kanban-card-adder-form__title'
                    type='text'
                    name='title'
                    ref={inputCardTitle}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword'>Company Name</Label>
                  <Input
                    className='react-kanban-card-adder-form__description'
                    type='text'
                    name='description'
                    ref={inputCardDescription}
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
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
