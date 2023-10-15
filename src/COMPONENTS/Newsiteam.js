import React, { Component } from "react";

export default class Newsiteam extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date ,source} = this.props;

    return (
      <>
        <div className="my-3">
          <div className="card">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "style={{left:'90%',zIndex:'1'}}>
                  {source}
                </span>
             
            <img
              src={
                !imgurl
                  ? "https://static.toiimg.com/thumb/msid-104269626,width-1070,height-580,imgsize-53970,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {title}...
                 </h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsurl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
