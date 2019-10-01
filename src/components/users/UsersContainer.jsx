import React from 'react';
import {connect} from 'react-redux';
import {
  follow, requestUsers,
  setCurrentPage,
  unfollow
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> :
        <Users {...this.props}
               onPageChanged={this.onPageChanged}/>
      }
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching:getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};


export default compose(
  connect(mapStateToProps, {setCurrentPage, requestUsers, follow, unfollow}),
  withAuthRedirect
)(UsersContainer);