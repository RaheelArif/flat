import React, { Component } from "react";
import { connect } from "react-redux";
import about from "../../images/house.jpg"
class ViewFlatCard extends Component {
  
    Expire = (sdate, month) => {
        var endDate = new Date(sdate);
        endDate.setMonth(endDate.getMonth() + month);
        var rightNow = new Date();
        if (rightNow > endDate) {
            return true
        }
        else {
            return false
        }

    }
    bid = (post) => {
        if (!this.props.user._id) {
            alert("Please Login First");
        }
        else if (this.Expire(post.date, post.timeLimit)) {
            alert("Bid Time Finished");
        }
        else {
            var newbid = {
                user: this.props.user,
                property: post,
                price: document.getElementById("bidprice").value
            }
            console.log(newbid)
            fetch("http://localhost:900/bids/addbid",{
            method:"POST",
            body:JSON.stringify(newbid),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success)
            {
                alert("Bid added")
            }
        })
        .catch(err=>console.log(err));
        }
    }
    getdate=(date,month)=>{
        var endDate = new Date(date);
        endDate.setMonth(endDate.getMonth() + month);
        return endDate.toDateString()
    }
    render() {

        var post = {};
        if (this.props.properties.length > 0 && this.props.match.params) {

            this.props.properties.filter((pr) => {
                if (this.props.match.params.id === pr._id) {
                    post = pr
                }
            })
        }

        return (
            <div>
                {post._id &&
                    <div className="view-c">
                        <div className="about">
                            <div className="about-left">
                                <h1>{post.title}</h1>
                                <p>
                                    {post.description}
                                </p>
                            </div>
                            <div className="about-right">
                                <img src={"http://localhost:900" + post.file} width="500" alt="about us image" />
                            </div>
                        </div>
                        <div className="v-p-border">
                            <div className="view-properties">
                                <span className="view-span">Bedrooms : <span className="view-value">{post.bathrooms}</span></span>
                                <span className="view-span">Bathrooms : <span className="view-value">{post.bedrooms}</span></span>
                                <span className="view-span">City : <span className="view-value">{post.city}</span></span>
                                <span className="view-span">Price : <span className="view-value">{post.price} INR</span></span>
                                <span className="view-span">Purpose : <span className="view-value">{post.purpose}</span></span>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                        <h3 style={{display: "inline", marginRight: "20px"}}>Please Bid before expire at {this.getdate(post.date,post.timeLimit)} </h3>

                            <input className="offer" type="number" id="bidprice" />
                            <button className="offer-btn" onClick={()=>this.bid(post)}>Bid</button>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
const mapStateToProps = (store) => {
    return {
        properties: store.propertyReducer,
        user: store.userReducer
    }
}
export default connect(mapStateToProps, null)(ViewFlatCard);