import React from "react";
import "./filter.scss";
import { IFilterProps } from "../../interfaces/filter-props.interface";
import HR from "../hr";

const Filter = (props: { data: IFilterProps }) => {
  const resultsCount = props.data.resultsCount;
  return (
    <React.Fragment>
      <div id="filter-section" className="row justify-content-sb">
        <p>About {resultsCount} filtered results</p>
        <div className="filter-icon-container row no-select">
          <img src="/filter-icon.svg" width={24} alt="filter icon" />
          <p>FILTER</p>
        </div>
      </div>
      <HR/>
    </React.Fragment>
  );
};

export default Filter;
