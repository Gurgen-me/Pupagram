import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import "./Profile.scss"
import {  getSubs, getUserProfile } from "../../store/blog/blogActions";
import { ProfileUserCard } from "./ProfileUserCard";
import { PostFeed } from "../../lib/PostFeed";
import { ProfileSubs } from "./ProfileSubs";

function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { curUser } = useAppSelector((state) => state.user);
  const { profileUser, posts, subs } = useAppSelector((state) => state.blog);

  useEffect(() => {
    document.title = profileId!;
    dispatch(getUserProfile(profileId!));
    dispatch(getSubs(profileUser.id!));
    console.log(subs)
  }, [profileId, curUser])

 

  return (
    <div className="profile">
      <ProfileUserCard profileUser={profileUser} />
      <PostFeed posts={posts}/>
      <ProfileSubs subs={subs} profileUser={profileUser}/>
    </div>
  )
}

export default Profile