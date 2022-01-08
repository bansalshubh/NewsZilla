import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { publishedDate, title, description, urlImage, urlLink } = this.props
        return (
            <div>
                <div className="card">
                    <img id='myimage' src={urlImage ? urlImage : "https://cdn.vox-cdn.com/thumbor/j3WIa5IaRp6CB7ndMQqMZyj3AYQ=/0x388:5408x3219/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23142969/Samsung_The_Freestyle_Lifestyle_01.jpg"} className="card-img-top" alt="..." />
                    <div style={{ "backgroundColor": this.props.mode === 'light' ? "white" : "#2b2b2b", "color": this.props.mode === 'light' ? "black" : "white" }} className="card-body">
                        <h5 style={{ "fontFamily": "'Roboto Slab', serif" }} className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <div className='d-flex justify-content-between'>
                            <a href={urlLink} rel="noreferrer" target="_blank" style={{ "borderRadius": "15px" }} className="btn btn-sm btn-primary">Read More</a>
                            <p className='text-primary' style={{ "fontSize": "12px" }}>{new Date().getHours()-new Date(publishedDate).getHours()} hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
