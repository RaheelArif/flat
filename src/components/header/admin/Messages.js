import React, { Component } from "react";
import { connect } from "react-redux"
class Messages extends Component {
    render() {
        console.log(this.props, "from message")
        return (
            <div className="message-c">


                {
                    this.props.messages.length > 0 &&
                    this.props.messages.map((msg => {
                        return (
                            <table border="1" className="user-messages">
                                <tr>

                                    <td className="user-gmaile">User Name: </td>
                                    <td className="user-gmail"> {msg.name}</td>
                                </tr>
                                <tr>

                                    <td className="user-gmaile">User Email:</td>
                                    <td className="user-gmail">{msg.email}</td>
                                </tr>
                                <tr>

                                    <td className="user-gmaile">User Subject: </td>
                                    <td className="user-gmail"> {msg.subject}</td>
                                </tr>
                                <tr>

                                    <td className="user-gmaile">User Message: </td>
                                    <td className="user-gmail"> {msg.message}</td>
                                </tr>

                            </table>
                        )
                    }))
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        messages: store.messageReducer,
    }
}
export default connect(mapStateToProps)(Messages);