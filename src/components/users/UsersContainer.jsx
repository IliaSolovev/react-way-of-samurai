import React from 'react';
import {connect} from 'react-redux';
import {
  follow, getUsers,
  setCurrentPage,
  unfollow
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    ...state.usersPage
  }
};


export default compose(
  connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow}),
  withAuthRedirect
)(UsersContainer);