import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
      let userId = this.props.match.params.userId? this.props.match.params.userId: 2;
      this.props.getUserProfile(userId);
    }

    render(){
        return (
            <Profile {...this.props} />
        )
    }

}

const mapStateToProps = (state)=>{
  return{
      profile: state.profilePage.profile,
  }
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



export default compose(
  connect(mapStateToProps,{getUserProfile}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer)