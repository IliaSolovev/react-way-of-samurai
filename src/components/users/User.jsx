import React from 'react';
import s from './User.module.css'
import userPhoto from './../../assets/image/user.png'
import {NavLink} from "react-router-dom";


let User = ({user,follow,unfollow, followingInProgress, ...props}) => {

  return (
    <div >
      <span>
          <div>
              <NavLink to={`./profile/${user.id}`}>
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='photo'
                   className={s.userPhoto}/>
              </NavLink>
          </div>
          <div>
              {user.followed ?
                <button disabled={followingInProgress.some(id => id === id)}
                        onClick={() => {
                          unfollow(user.id);
                        }}>UnFollow</button> :
                <button disabled={followingInProgress.some(id => id === id)}
                        onClick={() => {
                          follow(user.id)
                        }}>Follow</button>}
          </div>
      </span>
      <span>
          <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
          </span>
          <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
          </span>
        </span>
    </div>)


}

export default User;