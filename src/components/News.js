import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "South Africa parliament: Man arrested over massive fire - BBC News",
            "description": "Police in Cape Town say a man faces several charges over the fire and will appear in court on Tuesday.",
            "url": "https://www.bbc.com/news/world-africa-59850904",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/88AA/production/_122568943_mediaitem122564437.jpg",
            "publishedAt": "2022-01-03T10:31:07Z",
            "content": "Media caption, Video shows black smoke coming from the roof of the building in Cape Town\r\nA man has been arrested after a large fire severely damaged the Houses of Parliament in the South African cit… [+4488 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WTVD-TV"
            },
            "author": null,
            "title": "NC weather forecast: Freezing temperatures arrive Monday to turn heavy rain into snow - WTVD-TV",
            "description": "Heavy rain moves through North Carolina ahead of sharp drop in temperatures, which could bring snow to some areas.",
            "url": "https://abc11.com/nc-weather-radar-winter-storm-warning-snow/11419911/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11419983_010322-wtvd-main-weather-445a-vid.jpg?w=1600",
            "publishedAt": "2022-01-03T10:18:45Z",
            "content": "RALEIGH. N.C. (WTVD) -- Heavy rain moves through North Carolina ahead of sharp drop in temperatures, which could bring snow to some areas.As recent as two days ago, North Carolina was dealing with re… [+3462 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jason Samenow",
            "title": "DC snow forecast: Winter storm to produce significant accumulations - The Washington Post",
            "description": "We have increased our snowfall forecast to 4 to 8 inches for the immediate area",
            "url": "https://www.washingtonpost.com/weather/2022/01/03/dc-snow-winter-storm-warning/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GCYI2GDFT5EO3GFZXXN4KSLVDM.png&w=1440",
            "publishedAt": "2022-01-03T10:13:19Z",
            "content": "Story continues below advertisement\r\nConditions will rapidly deteriorate over the next few hours as snow continues and temperatures, currently 32 to 34 degrees, drop a few more degrees.\r\nBased on the… [+3592 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jan Dahinten",
            "title": "Property Stocks Sink After Demolition Order: Evergrande Update - Yahoo Finance",
            "description": "(Bloomberg) -- Chinese developer shares dropped following local media reports that China Evergrande Group has been ordered to tear down apartment blocks in a...",
            "url": "https://finance.yahoo.com/news/shares-suspended-trading-hong-kong-011422846.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JVvLXK3SNWphE6cjuVFnfg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/ae6sAHHM8sD.yt_rSIp2VA--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_markets_842/8355271d8599d0e5e026d1402cb08de1",
            "publishedAt": "2022-01-03T09:22:13Z",
            "content": "(Bloomberg) -- Chinese developer shares dropped following local media reports that China Evergrande Group has been ordered to tear down apartment blocks in a development in Hainan province. Evergrand… [+5512 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hong Kong's Citizen News says closure triggered by Stand News collapse - Reuters",
            "description": "Hong Kong independent online publication Citizen News said on Monday its <a href=\"https://www.reuters.com/world/china/hong-kong-independent-portal-citizen-news-says-shut-2022-01-02/\" target=\"_blank\">decision to shut down</a> was triggered by the closure of a …",
            "url": "https://www.reuters.com/world/china/hong-kongs-citizen-news-says-closure-triggered-by-stand-news-collapse-2022-01-03/",
            "urlToImage": "https://www.reuters.com/resizer/oPCbe84AkRdWiVeVgiWToSA4Qrw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R6ENX35SCNPN7M46SMMVCW276Q.jpg",
            "publishedAt": "2022-01-03T09:07:00Z",
            "content": "HONG KONG, Jan 3 (Reuters) - Hong Kong independent online publication Citizen News said on Monday its decision to shut down was triggered by the closure of a pro-democracy media outlet last week foll… [+2408 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Bill Cosby's Former Cellmates Still Calling Him for Guidance - TMZ",
            "description": "Bill Cosby's former fellow inmates are missing him following his prison release.",
            "url": "https://www.tmz.com/2022/01/03/bill-cosby-former-fellow-inmates-missing-him-prison-release/",
            "urlToImage": "https://imagez.tmz.com/image/68/16by9/2021/12/23/685728ececbf4f4396e5370f78c1e838_xl.jpg",
            "publishedAt": "2022-01-03T09:00:00Z",
            "content": "We know critics ofBill Cosby's overturned conviction would love to see him back in prison, but surprisingly ... a bunch of his former cellmates feel the same way, though not for the reasons you'd thi… [+1439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox News",
            "title": "Patton Oswalt defends performing with Dave Chappelle after backlash - New York Post ",
            "description": "Patton Oswalt defended his decision to perform with embattled comedian Dave Chappelle on New Year’s Eve.",
            "url": "https://nypost.com/2022/01/03/patton-oswalt-defends-performing-with-dave-chappelle-after-backlash/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/newspress-collage-20692064-1641198746349.png?w=1024",
            "publishedAt": "2022-01-03T08:45:00Z",
            "content": "Patton Oswalt defended his decision to perform with embattled comedian Dave Chappelle on New Years Eve. \r\nThe comedian shared in a post on Instagram that he was conducting his last show of 2021 at a … [+3815 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Peter King",
            "title": "Peter King's Football Morning In America, Week 17 - NBC Sports - NBC Sports",
            "description": "In the locker room when one of the most dramatic games of this or any NFL season had ended, Tampa Bay coach Bruce Arians told his players—all except the most famous former one, Antonio Brown—how proud he was of them.“You’re either with us or against us,” Aria…",
            "url": "https://profootballtalk.nbcsports.com/2022/01/03/antonio-brown-bucs-rams-covid-nfl-fmia-peter-king/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/01/GettyImages-1362455837.jpg",
            "publishedAt": "2022-01-03T08:40:41Z",
            "content": "In the locker room when one of the most dramatic games of this or any NFL season had ended, Tampa Bay coach Bruce Arians told his playersall except the most famous former one, Antonio Brownhow proud … [+70898 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3855bc7ae5a04fc4873e982e743daa87"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            isLoaded:true,
            articles:parsedData.articles
        });
        // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3855bc7ae5a04fc4873e982e743daa87")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }
    render() {
        let {mode} = this.props
        const lst = this.state.articles.map((element) => {
            return <div className="col md-3 my-3" key={element.url}>
                <Newsitem title={element.title} urlImage = {element.urlToImage} description={element.description} urlLink={element.url}/>
            </div>
        });
        return (
            <div className="container">
                <h1 className={`my-2 text-center text-${mode==='light'?'dark':'light'}`}>Top Headlines</h1>
                <div className="row">
                    {lst}
                </div>
            </div>
        )
    }
}
