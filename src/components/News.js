import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // static defaultprops = {
  //   country: 'in',
  //   pageSize: 8
  // category:'general',
  // }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      category: 'general'

    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-TimesNews`;
  }
  async updateNews() {
    // this.props.setProgress(40);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f3a1e275141412f8b933b4ace238636&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResuls,
      loading: false,
    });
    // this.props.setProgress(1000);
  }
  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}
    //   &apiKey=6f3a1e275141412f8b933b4ace238636&page=1&pageSize=9`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResuls,
    //   loading: false
    // });
    this.updateNews()

  }

  handleNextClick = async () => {
    // console.log("Next");
    // if (!(this.state.page + 1 >= Math.ceil(this.state.totalResults / 20))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
    //     }&category=${this.props.category
    //     }&apiKey=6f3a1e275141412f8b933b4ace238636&page= ${this.state.page + 1
    //     }&pageSize=9`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=
    //   ${this.props.country}&category=${this.props.category}
    //   &apiKey=6f3a1e275141412f8b933b4ace238636&page= ${this.state.page - 1}&pageSize=9`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false

    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData = async () => {


    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f3a1e275141412f8b933b4ace238636&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    // this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResuls,
      loading: false,
    });


  }

  render() {
    return (
      <>
        <h1
          className="text-center text-info "
          style={{ margin: "40px", font: "cursive", marginTop: '90px' }}>
          NewsMonkey-Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}

        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      source={element.source.name}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : " Sorry Dear"
                      }
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt ? element.publishedAt : " ---"}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-classic-exterior-right-front-three-quarter.jpeg?isig=0&q=75"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll >
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.PageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}>
            Next&rarr;
          </button>
        </div> */}
      </ >
    );
  }
}

export default News;
