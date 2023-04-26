import 'bootstrap/dist/css/bootstrap.min.css';

// import { useState } from 'react';
export default function NewsCom(props) {

  const newsstyle = {

    border: " 2px solid red"
  }
  return (
    <>
      {/* <h3 className='...newsstyle'>
        {props.tittle}
      </h3> */}
      <div className="card  my-3 " style={{ width: "18rem", ...newsstyle }}    >

          <h3  style={{fontSize:"20px "}}>{props.tittle}...</h3>
        <img src={props.url} className="card-img-top" alt="..." />
        <div className="card-body  my-5 ">
          <p className="card-text">{props.desc}... </p>
<a href={props.newsurl}  target="_blank" rel="noreferrer" className='btn btn-success'> Read more</a>

        </div>
      </div>
    </>
  )
}
