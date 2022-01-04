import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, urlImage, urlLink} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img style={{"height":"12vw","width":"18.7vw"}} src={urlImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0,40)}</h5>
                            <p className="card-text">{description.slice(0,60)}</p>
                            <a href={urlLink} target="_blank" style={{"borderRadius":"15px"}} className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
