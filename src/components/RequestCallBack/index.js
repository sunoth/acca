import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './index.css'


function RequestCallBack() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
        <div className='request-call-back-container'>
            <h1 className='request-call-back-heading'>Aspiring to be an ACCA??</h1>
            <Form>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs="col-12">
                        <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                            Username
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Username"
                        />
                    </Col>

                    <Col xs="col-12">
                        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control className='mb-2' id="inlineFormInputGroup" placeholder="Name" />
                    </Col>

                    <Col xs="col-12">
                        <Form.Label htmlFor="inlineFormInputUser" visuallyHidden>
                            Email
                        </Form.Label>
                        <Form.Control className='mb-3' id="inlineFormInputUser" placeholder="Email" />
                    </Col>
                </Row>
            </Form>
            <>
                <Button variant="primary" onClick={handleShow} >
                    Request Call Back
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You have Registered in ACCA Program!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    </div>
  );
}


export default RequestCallBack;