import { IconUser } from "images";
import styled from "styled-components";

const UnknownProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 2px #fff;
  width: 200px;
  height: 200px;

  svg {
    width: 85px;
    color: #fff;
  }
`;

function User(props) {
  console.log(props.image);
  return (
    <div>
      {props.image ? (
        <img
          src={props.image}
          alt="profile-pic"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      ) : (
        <UnknownProfile>
          <IconUser />
        </UnknownProfile>
      )}
      <h2>{props.username}</h2>
      <p>Followers: {props.followers}</p>
      <p>Following: {props.following}</p>
      <p>Playlists: {props.playlists}</p>
    </div>
  );
}

export default User;
