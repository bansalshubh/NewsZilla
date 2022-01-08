import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        pageSize: 6,
        mode: 'light',
        country: 'in',
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        mode: PropTypes.string,
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: true,
            articles: [],
            page: 1,
            totalPages: 0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            isLoaded: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            isLoaded: false,
            articles: parsedData.articles,
            totalPages: Math.ceil(parsedData.totalResults / this.props.pageSize)
        });
    }

    changePage = async (value) => {
        this.setState({
            isLoaded: true
        })
        if (value === 'one') {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=1&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: 1,
                isLoaded: false,
                articles: parsedData.articles
            });
        }
        else if (value === 'two') {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=2&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: 2,
                isLoaded: false,
                articles: parsedData.articles
            });
            console.log(this.state.page)
        }
        else if (value === 'next' && this.state.page < this.state.totalPages) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                isLoaded: false,
                articles: parsedData.articles
            });
        }
        else if (value === "previous") {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c0cca336a7224a6ea97984b0d6f8493e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page - 1,
                isLoaded: false,
                articles: parsedData.articles
            });
        }
    }

    render() {
        let { mode } = this.props
        return (
            <div className="container">
                <h1 className={`my-3 text-center text-${mode === 'light' ? 'dark' : 'light'}`}>TOP HEADLINES</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            {this.state.isLoaded && <Spinner />}
                            {!this.state.isLoaded && <Newsitem mode={mode} publishedDate={element.publishedAt} title={element.title} urlImage={element.urlToImage} description={element.description} urlLink={element.url} />}
                        </div>
                    })}
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