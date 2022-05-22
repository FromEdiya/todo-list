import { useParams } from 'react-router-dom';

type ProfilePrams = {
  username: string;
};

type ProfileData = {
  [index: string]: {
    name: string;
    description: string;
  };
};

const data: ProfileData = {
  santos: {
    name: '김상초',
    description: '리액트를 좋아하는 개발자',
  },
  hjlee: {
    name: '이현지',
    description: '샤이니를 좋아하는 개발자',
  },
};

const Profile = () => {
  const { username } = useParams<ProfilePrams>() as ProfilePrams;

  const profile = data[username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
