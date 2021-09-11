import React, { Component } from "react";

class UnfilteredNewsChild extends Component {

    render() {
        return (
            <div>
                <h2 className="news-title">{this.props.data.title}</h2>
                <p className="news-feed">{this.props.data.feed}</p>
            </div>
        )
    }

}

export default UnfilteredNewsChild;