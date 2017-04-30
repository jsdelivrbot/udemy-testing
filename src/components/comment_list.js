import React, { Component } from 'react';
import { connect } from 'react-redux';

const commentList = (props) => {
  const list = props.comments.map((comment, idx) => <li key={idx}>{comment}</li>);
  return (
    <ul className="comment-list">{list}</ul>
  )
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(commentList)