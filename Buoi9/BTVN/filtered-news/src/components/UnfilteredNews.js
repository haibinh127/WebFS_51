import React, { Component } from 'react';
import newsJson from '../../src/news.json';
import UnfilteredNewsChild from './UnfilteredNewsChild';

class UnfilteredNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: newsJson,
            keyword: '',
        }
    }

    handleChangeKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    getKeyword = (e) => {
        var keywordToSearch = this.state.keyword;

        var keyword = keywordToSearch.toLowerCase();

        var searchResult = this.state.data.filter(word => word.title.toLowerCase().indexOf(keyword) > -1);

        this.setState({ data: searchResult });
    }

    render() {
        return (
            <div>
                <div style={{ paddingTop: "20px" }}>
                    Keywords:
                    <input value={this.state.keyword} onChange={this.handleChangeKeyword} ></input>
                    <button onClick={this.getKeyword}>Search</button>
                </div>
                {this.state.data.map((value, index) => {
                    return (
                        <UnfilteredNewsChild key={index} data={value} />
                    )
                })}
            </div>
        )
    }

}

export default UnfilteredNews;x