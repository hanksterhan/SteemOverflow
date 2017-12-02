import React from 'react'
import { Button, Header, Image, Modal, Menu, Form, TextArea } from 'semantic-ui-react'

class QuestionModal extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            text: "",
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

    render() {
        return (
          <Modal trigger={<Menu.Item name='Ask Question' onClick={this.openModal} />}>
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
                        this.props.handleQuestionSubmit(this.state.name, this.state.text)
                    }}>Submit</Button>
                </Form>
            </Modal.Content>
          </Modal>
        )
    }
}

export default QuestionModal
