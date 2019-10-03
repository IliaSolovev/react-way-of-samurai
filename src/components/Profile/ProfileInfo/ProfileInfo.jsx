import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import needJob from './image/need-a-job.jpg'
import notNeedJob from './image/what-not-to-do-when-turning-down-a-job-offer.png'
import UserPhoto from './../../../assets/image/user.png'

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  let profileState = props.profile;
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={profileState.photos.large ? s.imgBlock : s.smallImgBlock}>
          <img src={profileState.photos.large ? profileState.photos.large : UserPhoto} alt="ava"/>
        </div>
        <div className={s.description}>
          <div className={s.item}>
            <ProfileStatusWithHooks
              status={props.status} updateStatus={props.updateStatus}/>
          </div>
          <div className={s.item}>
            <span className={s.title}>Name: </span> {profileState.fullName}
          </div>
          <div className={s.item}>
            <span className={s.title}>Job status: </span> {profileState.aboutMe}
          </div>
          <div className={s.item}>
            <span className={s.title}>Job description:</span> {profileState.lookingForAJobDescription}
            <img src={profileState.lookingForAJob ? needJob : notNeedJob} alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProfileInfo;
