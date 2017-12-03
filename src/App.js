import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import pic from './assets/images/phoenix_logo_2color.gif';
import './App.css';

import QuestionModal from './Modal.js'

import { Menu, Input, Dropdown, Feed, Icon, Comment, Form, Button, Checkbox } from 'semantic-ui-react'

const CommentExampleActions = (
    <Comment.Group threaded className='text container'>
        <Comment>
            <Comment.Avatar as='a' src={pic} />
            <Comment.Content>
                <Comment.Author as='a'>Tom Lukic</Comment.Author>
                <Comment.Metadata>
                    <span>3 days ago</span>
                </Comment.Metadata>
                <Comment.Text>
                    How do I get added to the waitlist for computer science?
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Upvote</Comment.Action>
                    <Comment.Action>Downvote</Comment.Action>
                    <Comment.Action>Follow</Comment.Action>
                    <Comment.Action>
                        <Icon name='expand' />
                        Full-screen
                    </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            <Comment.Group threaded className='text container'>
                <Comment className='comment'>
                    <Comment.Avatar as='a' src={pic} />
                    <Comment.Content>
                        <Comment.Author as='a'>Michael Wertz</Comment.Author>
                        <Comment.Metadata>
                            <span>Today at 4:20PM</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            You email the professor and follow the guidelines at www.cs.swarthmore.edu/waitlist-procedure
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            <Comment.Action>Upvote</Comment.Action>
                            <Comment.Action>Downvote</Comment.Action>
                            <Comment.Action>Follow</Comment.Action>
                            <Comment.Action>
                                <Icon name='expand' />
                                Full-screen
                            </Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
            <Comment.Group threaded className='text container'>
                <Comment className='comment'>
                    <Comment.Avatar as='a' src={pic} />
                    <Comment.Content>
                        <Comment.Author as='a'>Nicole Khorosh</Comment.Author>
                        <Comment.Metadata>
                            <span>Today at 5:16PM</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            Thank you!!!
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            <Comment.Action>Upvote</Comment.Action>
                            <Comment.Action>Downvote</Comment.Action>
                            <Comment.Action>Follow</Comment.Action>
                            <Comment.Action>
                                <Icon name='expand' />
                                Full-screen
                            </Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </Comment>
    </Comment.Group>
)
const anotherComment = (
    <Comment.Group threaded className='text container'>
        <Comment className='comment'>
            <Comment.Avatar as='a' src={pic} />
            <Comment.Content>
                <Comment.Author as='a'>Luke Tinik</Comment.Author>
                <Comment.Metadata>
                    <span>Today at 4:20PM</span>
                </Comment.Metadata>
                <Comment.Text>
                    Anyone have any tricks to calculate cross products quickly?
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Upvote</Comment.Action>
                    <Comment.Action>Downvote</Comment.Action>
                    <Comment.Action>Follow</Comment.Action>
                    <Comment.Action>
                        <Icon name='expand' />
                        Full-screen
                    </Comment.Action>
                </Comment.Actions>
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
            </Comment.Content>
        </Comment>

    </Comment.Group>
)


const Thread = (props) => (
        <Comment className='comment'>
            <Comment.Avatar as='a' src={pic} />
            <Comment.Content>
                <Comment.Author as='a'>{props.author}</Comment.Author>
                <Comment.Metadata>
                    <span>Just now</span>
                </Comment.Metadata>
                <Comment.Text>
                    {props.text}
                </Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                    <Comment.Action>Upvote</Comment.Action>
                    <Comment.Action>Downvote</Comment.Action>
                    <Comment.Action>Follow</Comment.Action>
                    <Comment.Action>
                        <Icon name='expand' />
                        Full-screen
                    </Comment.Action>

                </Comment.Actions>
                <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.handleReply}/>
                </Form>
            </Comment.Content>
        </Comment>
)

class App extends Component {
    constructor() {
        super()
        this.state = {
            activeItem: 'home',
            collapsed: true,
            threads: [{author: "Henry Han", text: "hi there"}]
        }

        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this)
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleReply = (e, { checked }) => this.setState({ collapsed: checked})
    handleNewPost = (e, {props}) => this.setState({author: props.author, text: props.text})

    handleQuestionSubmit = (author, text) => {
        this.setState({threads: [...this.state.threads, {author, text}]})
    }

    render() {
        const { activeItem, collapsed } = this.state

        return (
            <div style={{backgroundColor: '#e6ecf0'}}>
                <Menu inverted style={{backgroundColor: '#710913'}}>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Item name='questions' active={activeItem === 'questions'} onClick={this.handleItemClick} />

                    <QuestionModal handleQuestionSubmit={this.handleQuestionSubmit} />

                    <h1 className="title" style={{color: '#FFF'}}>SwatSaver</h1>



                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                            <Button primary>signup</Button>
                            <Button>login</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                {CommentExampleActions}
                <Comment.Group threaded className='text container'>
                    {this.state.threads.map((thread,i) => (
                        <Thread key={i} author={thread.author} text={thread.text} />
                    ))}

                    <Comment className='comment'>
                        <Comment.Avatar as='a' src={pic} />
                        <Comment.Content>
                            <Comment.Author as='a'>Luke Tinik</Comment.Author>
                            <Comment.Metadata>
                                <span>Today at 4:20PM</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                Anyone have any tricks to calculate cross products quickly?
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                <Comment.Action>Upvote</Comment.Action>
                                <Comment.Action>Downvote</Comment.Action>
                                <Comment.Action>Follow</Comment.Action>
                                <Comment.Action>
                                    <Icon name='expand' />
                                    Full-screen
                                </Comment.Action>

                            </Comment.Actions>
                            <Form reply>
                                <Form.TextArea />
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.handleReply}/>
                            </Form>
                        </Comment.Content>
                    </Comment>

                    <Comment collapsed = {collapsed}>
                        <Comment.Avatar as='a' src={pic} />
                        <Comment.Content>
                            <Comment.Author as='a'>Henry Han</Comment.Author>
                            <Comment.Metadata>
                                <span>Just Now</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                You take the determinant of the vectors!
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                <Comment.Action>Upvote</Comment.Action>
                                <Comment.Action>Downvote</Comment.Action>
                                <Comment.Action>Follow</Comment.Action>
                                <Comment.Action>
                                    <Icon name='expand' />
                                    Full-screen
                                </Comment.Action>
                            </Comment.Actions>
                            <Form reply>
                                <Form.TextArea />
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                            </Form>
                        </Comment.Content>
                    </Comment>

                </Comment.Group>
            </div>
        )
    }
}




export default App;
