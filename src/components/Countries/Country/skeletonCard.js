import React from "react";
import "./style.scss";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className="country__wrapper">
      <div className="country">
        <div className="country__flag">
          <Skeleton width={`100%`} height={`100%`} />
        </div>
        <div className="country__desc">
          <h3 className="country__name">
            <Skeleton width={`100%`} height={10} />
          </h3>
          <p className="country__desc--field">
            <span className="country__desc--title">
              <Skeleton width={`20%`} height={10} />{" "}
            </span>
            <Skeleton width={`40%`} height={10} />
          </p>
          <p className="country__desc--field">
            <span className="country__desc--title">
              <Skeleton width={`20%`} height={10} />{" "}
            </span>
            <Skeleton width={`40%`} height={10} />
          </p>
          <p className="country__desc--field">
            <span className="country__desc--title">
              <Skeleton width={`20%`} height={10} />{" "}
            </span>
            <Skeleton width={`40%`} height={10} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
