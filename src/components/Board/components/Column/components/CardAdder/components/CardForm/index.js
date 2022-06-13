import { useRef, useState } from 'react'
import { Modal, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { when } from '@services/utils'

function CardForm({ onConfirm, onCancel, serviceType }) {
  const inputCardTitle = useRef()
  const inputCardDescription = useRef()
  const [title, setTitle] = useState(null)
  const [company, setCompany] = useState(null)
  const openModal = true

  function addCard(event) {
    console.log('Clicked')
    event.preventDefault()
    onConfirm({ title: title, description: company })
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
            <div className='modal-header' style={{ justifyContent: 'center !important' }}>
              <h5 className='modal-title mt-0'>Add Job</h5>
            </div>
            <div className='modal-body react-kanban-card-adder-form'>
              <form onSubmit={addCard}>
                <FormGroup>
                  <Label for='exampleEmail'>Job Title</Label>
                  <Input
                    className='react-kanban-card-adder-form__title'
                    type='text'
                    name='title'
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword'>Company Name</Label>
                  <Input
                    className='react-kanban-card-adder-form__description'
                    type='text'
                    name='description'
                    onChange={(event) => setCompany(event.target.value)}
                    required
                  />
                </FormGroup>
                <div style={{ textAlign: 'end' }}>
                  <Button
                    className='react-kanban-card-adder-form__button'
                    type='submit'
                    style={{ backgroundColor: 'rgb(106, 79, 235)' }}
                  >
                    Submit
                  </Button>
                  <Button
                    className='react-kanban-card-adder-form__button'
                    type='button'
                    onClick={onCancel}
                    style={{
                      textAlign: 'center',
                      marginLeft: '10px',
                      backgroundColor: 'white',
                      color: '#707070',
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
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
