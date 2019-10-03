import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow, ...props}) => {

  return (
    <div>
      <div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
                   portionSize={pageSize} onPageChanged={onPageChanged}/>
      </div>
      {users.map(u =><User key={u.id} user={u} unfollow={unfollow}
                           follow={follow}  followingInProgress={followingInProgress}/>)}
    </div>
  )

}

export default Users;