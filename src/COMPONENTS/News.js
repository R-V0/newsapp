import React, { Component } from 'react'
import Newsiteam from './Newsiteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 5,
    categroy:'general',

  }
  static propTypes = {
    country: PropTypes.string,
    // pagesize:propTypes.inter,
    // aakasha bhai rakesh bhai rana nadiyad:9727397690
    categroy:PropTypes.string,
  }
  "articles"= [
    {
    "source": {
    "id": "bbc-sport",
    "name": "BBC Sport"
    },
    "author": null,
    "title": "Cricket recommended for 2028 LA Olympics spot",
    "description": "Cricket could be in the Olympics for the first time since 1900 as organisers recommend it to be part of the 2028 Los Angeles Games.",
    "url": "http://www.bbc.co.uk/sport/olympics/67058414",
    "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/BE07/production/_131374684_gettyimages-1669874103.jpg",
    "publishedAt": "2023-10-09T18:22:23.5006004Z",
    "content": "England won the 2022 Men's Twenty20 World Cup\r\nCricket could be in the Olympics for the first time since 1900 after organisers recommended it to be part of the 2028 Los Angeles Games.\r\nTwenty20 crick… [+2249 chars]"
    },
    {
    "source": {
    "id": "bbc-sport",
    "name": "BBC Sport"
    },
    "author": null,
    "title": "Boult takes 'absolutely spectacular catch' for New Zealand",
    "description": "Trent Boult takes an \"absolutely spectacular\" acrobatic catch for New Zealand to dismiss Netherlands batter Bos de Leede at the ICC Men's Cricket World Cup.",
    "url": "http://www.bbc.co.uk/sport/av/cricket/67053529",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/12AD0/production/_131369467_p0gkdswq.jpg",
    "publishedAt": "2023-10-09T14:37:19.2185224Z",
    "content": "Trent Boult takes an \"absolutely spectacular\" acrobatic catch for New Zealand to dismiss Netherlands batter Bos de Leede at the ICC Men's Cricket World Cup.\r\nFOLLOW LIVE: New Zealand v Netherlands\r\nA… [+24 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
    ]
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }  
  }
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d1611251c8e84dc6b0e369fd601d13cc&page=1&pageSize=${this.props.pagesize}`;      
  this.setState({loading:true});
  let data=await fetch(url);
  let userdata=await data.json()
  console.log(userdata);          
  this.setState({loading:false});
  this.setState({articles:userdata.articles,totalResults:userdata.totalResults});
}
handelnextclick=async()=>{
  console.log("n");
  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

  }
  else{

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d1611251c8e84dc6b0e369fd601d13cc&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;      
    this.setState({loading:true});
    let data=await fetch(url);
    let userdata=await data.json()
    console.log(userdata);
    this.setState({loading:false});
    this.setState({
      articles:userdata.articles,
      page:this.state.page+1
    })
  }
}

  handelpreclick=async()=>{
    console.log("p");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d1611251c8e84dc6b0e369fd601d13cc&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
  this.setState({loading:true});
  let data=await fetch(url);
  let userdata=await data.json()
  console.log(userdata);
  this.setState({loading:false});
  this.setState=({
    page:this.state.page-1,
    articles:userdata.articles
  })

}
  render() {
    let {pagesize}=this.props;
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center'>NEWSMONKEY TOP HEADLINES</h1>
        {this.state.loading &&<Spinner />}
          <div className="row">
          {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>

          <Newsiteam  title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.ppublishedAt} source={element.source.name}/>
          </div>
        }) }
        </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelpreclick}>&larr; Preavious</button>
      <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pagesize)}type="button" className ="btn btn-dark" onClick={this.handelnextclick}>Next &rarr;</button>

      </div>
      </>
    )
  }
}
