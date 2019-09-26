import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import needJob from './image/need-a-job.jpg'
import notNeedJob from './image/what-not-to-do-when-turning-down-a-job-offer.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  let profileState = props.profile;
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.imgBlock}><img src={profileState.photos.large} alt="ava"/></div>
        <div className={s.description}>
          <div className={s.item}>
            <ProfileStatus
              status={'Hello'}
            />
          </div>
          <div className={s.item}>
            <span className={s.title}>Name: </span> {profileState.fullName}
          </div>
          <div className={s.item}>
            <span className={s.title}>Status: </span> {profileState.aboutMe}
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
