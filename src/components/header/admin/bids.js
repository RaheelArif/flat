import React, { Component } from "react";
import { connect } from "react-redux";

class Bids extends Component {
    render() {

        return (
            <div>
                <h1>Bids</h1>
                {
                    this.props.bids.length > 0 &&
                    this.props.bids.map(b => {
                        if (this.props.match.params.id === b.property) {
                            var user = this.props.user.find((user) => {
                                if (user._id == b.user)
                                    return user
                            })
                            return (<table border="1" className="user-messages">
                             <tr>

                                 <td className="user-gmaile">Price: {b.price}</td>
                                 <td className="user-gmail">User Name: {user.name}</td>
                             </tr>
               

                         </table>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        bids: store.bidReducer,
        user: store.userReducer
    }
}
export default connect(mapStateToProps)(Bids);