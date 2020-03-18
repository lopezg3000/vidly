import React, { Component } from 'react'

//Input: liked: boolean
//Output: onClick

class RevisedLike extends Component {
    render() {
        let classes = "fa fa-heart";
        if (!this.props.liked) classes += "-o";
        return (
            <i
                onClick={this.props.onClick}
                style={{ cursor: "pointer" }}
                className={classes}
                aria-hidden="true"
            />
        );
    }
}

export default RevisedLike;