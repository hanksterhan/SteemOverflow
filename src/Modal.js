import React from 'react'
import { Button, Header, Image, Modal, Menu, Form, TextArea } from 'semantic-ui-react'
import swal from 'sweetalert2'

class QuestionModal extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            text: "",
            open: false
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleOpen = () => this.setState({ open: true })

    handleClose = () => this.setState({ open: false })

    render() {
        return (
          <Modal open={this.state.open} trigger={<Menu.Item name='Ask Question' onClick={this.handleOpen} />}>
            <Modal.Header>Ask a Question</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Johnny Appleseed' value={this.state.name} onChange={this.handleNameChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Question</label>
                        <textarea value={this.state.text} placeholder='Is Sharples good today?' onChange={this.handleTextChange}/>
                    </Form.Field>

                    <Button onClick={() => {
                        if (this.state.name === '' || this.state.text === ''){
                            return;
                        }
                        this.handleClose()
                        swal({
                            title: 'Nice!',
                            text: 'Your question has been posted!',
                            type: 'success',
                            timer: 1000,
                            showConfirmButton: false
                        })
                        this.props.handleQuestionSubmit(this.state.name, this.state.text)
                    }}>Submit</Button>
                </Form>
            </Modal.Content>
          </Modal>
        )
    }
}

export default QuestionModal
