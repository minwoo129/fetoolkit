import React, { useMemo } from 'react';
import type { UserProfileType } from '.';
import '../../css/menuTemplate.css';

interface Props {
  userProfile?: UserProfileType;
}
const UserProfile = ({ userProfile }: Props) => {
  const { name, email, url } = useMemo(
    () => ({
      name: userProfile?.name ?? 'Guest',
      email: userProfile?.email ?? 'guest@example.com',
      url:
        userProfile?.url ??
        'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    }),
    [userProfile],
  );
  return (
    <div className="menu-user-profile">
      <a href="#" className="menu-user-link">
        <img alt="" src={url} className="menu-user-avatar" />

        <div className="menu-user-info">
          <p>
            <strong className="menu-user-name">{name}</strong>

            <span className="menu-user-email">{email}</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default UserProfile;
