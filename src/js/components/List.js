import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((el) => {
      return <li key={uuid()}>{el.title}</li>;
    })}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
