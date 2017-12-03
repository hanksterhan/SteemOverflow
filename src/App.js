import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import matt from './assets/images/BlueHead.jpg';
import './App.css';

import QuestionModal from './Modal.js'

import { Menu, Input, Dropdown, Feed, Icon, Comment, Form, Button, Checkbox } from 'semantic-ui-react'

const CommentExampleActions = (
    <Comment.Group threaded className='text container'>
        <Comment>
            <Comment.Avatar as='a' src={matt} />
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
                    <Comment.Action>
                        <Icon name='expand' />
                        Full-screen
                    </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            <Comment.Group threaded className='text container'>
                <Comment>
                    <Comment.Avatar as='a' src={matt} />
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
                            <Comment.Action>
                                <Icon name='expand' />
                                Full-screen
                            </Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
            <Comment.Group threaded className='text container'>
                <Comment>
                    <Comment.Avatar as='a' src={matt} />
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
        <Comment>
            <Comment.Avatar as='a' src={matt} />
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

const FeedExampleBasic = (
      <Feed className='text container'>
        <Feed.Event>
          <Feed.Label>
            <img src={matt} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Matt Czernik</Feed.User> added you as a friend
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                4 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label>
            <img src={matt} />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <a>Kastan Day</a> added <a>2 new illustrations</a>
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a><img src='/assets/images/wireframe/image.png' /></a>
              <a><img src='/assets/images/wireframe/image.png' /></a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                1 Like
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label>
              <img src={matt} />
            </Feed.Label>
          <Feed.Content>
            <Feed.Summary date='2 Days Ago' user='Nicole Khorosh' content=' add you as a friend' />
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                8 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label>
              <img src={matt} />
            </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <a>Henry Han</a> posted on his page
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
              over again. Even if we dont run extra laps that day, we surely will come back for more of the same another
              day soon.
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                69 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
            <Feed.Label>
              <img src={matt} />
            </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <a>Justen Kitsune</a> added <a>2 new photos</a> of you
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a><img src='/assets/images/wireframe/image.png' /></a>
              <a><img src='/assets/images/wireframe/image.png' /></a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                41 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
)

const Thread = (props) => (
        <Comment>
            <Comment.Avatar as='a' src={matt} />
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
            <div>
                <Menu>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />

                    <QuestionModal handleQuestionSubmit={this.handleQuestionSubmit} />

                    <h1 className="title">SwatSaver</h1>



                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                            <Button primary>signup</Button>
                            <Button secondary>login</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                {CommentExampleActions}
                <Comment.Group threaded className='text container'>
                    {this.state.threads.map((thread,i) => (
                        <Thread key={i} author={thread.author} text={thread.text} />
                    ))}

                    <Comment>
                        <Comment.Avatar as='a' src={matt} />
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
                        <Comment.Avatar as='a' src={matt} />
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
