import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl}
            className="card-img-top" alt="..." />
          <div className="card-body">
            <span className=" position-absolute top-0 translate-middlebadge 
            rounded-pill text-bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" href={newsUrl}>{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                BY {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div >
    );
  }
}

export default NewsItem;
