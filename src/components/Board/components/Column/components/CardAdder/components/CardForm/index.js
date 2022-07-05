import { useState } from 'react'
import { Modal, Button, FormGroup, Label, Input } from 'reactstrap'

function CardForm({ onConfirm, onCancel, serviceType }) {
  const [title, setTitle] = useState(null)
  const [company, setCompany] = useState(null)
  const openModal = true

  function addCard(event) {
    event.preventDefault()
    onConfirm({ title: title, description: company })
  }

  return (
    <>
      {serviceType === 'jobSeeker' ? (
        <>
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
        <>
          <Modal isOpen={openModal} toggle={onCancel} centered>
            <div className='modal-header' style={{ justifyContent: 'center !important' }}>
              <h5 className='modal-title mt-0'>Add Job</h5>
            </div>
            <div className='modal-body react-kanban-card-adder-form'>
              <form onSubmit={addCard}>
                <FormGroup>
                  <Label for='exampleEmail'>Summary</Label>
                  <Input
                    className='react-kanban-card-adder-form__title'
                    type='text'
                    name='title'
                    onChange={(event) => setTitle(event.target.value)}
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
                      color: 'red !important',
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </Modal>
        </>
      )}
    </>
  )
}

export default CardForm
