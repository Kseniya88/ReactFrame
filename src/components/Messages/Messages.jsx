import { Component, Fragment } from 'react';

class Messages extends Component {

    state = {
        messages: [],
    };

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, 'Hello! Who are you?'] });
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, 'Hi! I am robot'],
                });
            }, 1500);
        }
    }

    render() {
        console.log('render', this.state);
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} text={item} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send message</button>
            </Fragment>
        );
    }
}

const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export { Messages };
