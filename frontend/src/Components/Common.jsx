import React from "react";
import { Link } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}{" "}
                    <strong className="brand-name">
                      {" "}
                      <br /> Ecommerce Website
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae quo, sed distinctio excepturi pariatur ea facere
                  </h2>
                  <div className="mt-3">
                    <Link to="/product" className="btn-get-started">
                      {props.btname}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated ml-[48rem] w-[17rem] py-[7rem] -mt-[21rem]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
