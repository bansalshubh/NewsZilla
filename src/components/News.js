import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col md-3">
                    <Newsitem title="Cricket" description="This news is about cricket"/>
                    </div>
                    <div className="col md-3">
                    <Newsitem title="Cricket" description="This news is about cricket"/>
                    </div>
                    <div className="col md-3">
                    <Newsitem title="Cricket" description="This news is about cricket"/>
                    </div>
                </div>
            </div>
        )
    }
}
