import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalResults, setTotalResults] = useState(0)
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`
            props.SetState(30)
            setIsLoaded(true)
            let data = await fetch(url)
            props.SetState(50)
            let parsedData = await data.json()
            // props.SetState(80)
            setIsLoaded(false)
            setArticles(parsedData.articles)
            setTotalPages(Math.ceil(parsedData.totalResults / props.pageSize))
            setTotalResults(parsedData.totalResults)
            props.SetState(100)
        }
        fetchData();
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page + 1}&pageSize=${props.pageSize}`
        setIsLoaded(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setIsLoaded(false)
        setPage(page + 1)
    }

    let { mode } = props
    return (
        <div className="container">
            <h1 className={`mobile-space text-center text-${mode === 'light' ? 'dark' : 'light'}`}>{props.category.toUpperCase()} TOP HEADLINES</h1>
            {/* {this.state.isLoaded && <Spinner/>} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3 my-3" key={element.url}>
                                {<Newsitem mode={mode} publishedDate={element.publishedAt==null?"":element.publishedAt} title={element.title} urlImage={element.urlToImage} description={element.description} urlLink={element.url} />}
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    pageSize: 6,
    mode: 'light',
    country: 'in',
    category: "general"
}

News.propTypes = {
    pageSize: PropTypes.number,
    mode: PropTypes.string,
    country: PropTypes.string,
    category: PropTypes.string
}
