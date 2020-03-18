import React from "react";

//Input: liked: boolean
//Output: onClick

const Like = props => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    // console.log(props);
    return (
        <i
            onClick={() => props.onLike(props.movie)}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true"
        />
    );
}

export default Like;