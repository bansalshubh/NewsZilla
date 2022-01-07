import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            articles: [],
            page: 1,
            totalPages: 0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page}&pageSize=16`
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({
            isLoaded: true,
            articles: parsedData.articles,
            totalPages: Math.ceil(parsedData.totalResults/16)
        });
        // console.log(this.state.totalPages)
    }

    changePage = async(value) => {
        if (value === 'one') {
            // console.log(value)
            // console.log(this.state.page)
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=1&pageSize=16`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page:1,
                isLoaded: true,
                articles: parsedData.articles
            });
            // console.log(this.state.articles.length);
        }
        else if(value === 'two')
        {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=2&pageSize=16`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page:2,
                isLoaded: true,
                articles: parsedData.articles
            });
            // console.log(this.state.page)
        }
        else if(value === 'next' && this.state.page < this.sttotalPages)
        {
            // this.setState({
            //     page:this.state.page + 1
            // })
            // console.log(this.state.page)
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page+1}&pageSize=16`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page:this.state.page + 1,
                isLoaded: true,
                articles: parsedData.articles
            });
        }
        else if(value === "previous")
        {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page-1}&pageSize=16`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page:this.state.page - 1,
                isLoaded: true,
                articles: parsedData.articles
            });
        }
    }

    render() {
        let { mode } = this.props
        const lst = this.state.articles.map((element) => {
            return <div className="col md-4 my-3" key={element.url}>
                <Newsitem title={element.title} urlImage={element.urlToImage} description={element.description} urlLink={element.url} />
            </div>
        });
        return (
            <div className="container">
                <h1 className={`my-3 text-center text-${mode === 'light' ? 'dark' : 'light'}`}>TOP HEADLINES</h1>
                <div className="row">
                    {lst}
                </div>
                <nav className="d-flex justify-content-center my-3" aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button disabled={this.state.page <= 1} onClick={() => this.changePage("previous")} style={{ "backgroundColor": mode === 'light' ? 'black' : 'white' }} className="page-link">Previous</button></li>
                        <li className="page-item"><button onClick={() => this.changePage("one")} style={{ "backgroundColor": mode === 'light' ? 'black' : 'white' }} className="page-link">1</button></li>
                        <li className="page-item"><button onClick={() => this.changePage("two")} style={{ "backgroundColor": mode === 'light' ? 'black' : 'white' }} className="page-link">2</button></li>
                        {/* <li className="page-item"><a className="page-link" href="/">3</a></li> */}
                        <li className="page-item"><button onClick={() => this.changePage("next")} style={{ "backgroundColor": mode === 'light' ? 'black' : 'white' }} className="page-link">Next</button></li>
                    </ul>
                </nav>
            </div>
        )
    }
}