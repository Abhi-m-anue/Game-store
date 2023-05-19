import React from "react";

const Skeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="card" aria-hidden="true">
        <div className="card-body">
          {/* <h5 className="card-title placeholder-glow">
            <span className="placeholder col-7"></span>
          </h5> */}
          <p className="card-text placeholder-glow">
            <span className="placeholder" style={{height:"100px", width:"100%"}}></span>
            <div className="wraper" style={{padding:"10px 10px 10px 10px", backgroundColor:"inherit"}}>
                <span className="placeholder col-6 placeholder-lg" ></span>
                <span className="placeholder col-10 placeholder-sm"></span>
                <span className="placeholder col-10 placeholder-sm"></span>
            </div>
          </p>
          {/* <a
            href="#"
            className="btn btn-primary disabled placeholder col-6"
          ></a> */}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
