import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
            totalPages: 0,
            totalResults:0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.props.SetState(10)
        let data = await fetch(url)
        this.setState({
            isLoaded:true
        })
        this.props.SetState(50)
        let parsedData = await data.json()
        // this.props.SetState(80)
        this.setState({
            isLoaded: false,
            articles: parsedData.articles,
            totalPages: Math.ceil(parsedData.totalResults / this.props.pageSize),
            totalResults:parsedData.totalResults
        });
        this.props.SetState(100)
    }

    fetchMoreData = async()=>{
        console.log(this.props.api_key)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({
            isLoaded: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page : this.state.page + 1,
            isLoaded : false,
            articles : this.state.articles.concat(parsedData.articles)
        })
    }


    render() {
        let { mode } = this.props
        return (
            <div className="container">
                <h1 className={`my-3 text-center text-${mode === 'light' ? 'dark' : 'light'}`}>TOP HEADLINES</h1>
                {/* {this.state.isLoaded && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3 my-3" key={element.url}>
                            {<Newsitem mode={mode} publishedDate={element.publishedAt} title={element.title} urlImage={element.urlToImage} description={element.description} urlLink={element.url} />}
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}