import { useEffect, useState } from "react";
import { getUserData } from "../logic";

function Profile() {
  const [user, setUser] = useState(null);
  const [followees, setFollowees] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { userData, followeesData, playlistData } = await getUserData();
      setUser(userData.data);
      setFollowees(followeesData.data);
      setPlaylists(playlistData.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user || !followees || !playlists) {
    return null;
  }

  return (
    <div style={{ marginLeft: "200px" }}>
      <img
        src={user.images[0].url}
        alt="profile-pic"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
      <h1>{user.display_name}</h1>
      <p>Followers: {user.followers.total}</p>
      <p>Following: {followees.artists.total}</p>
      <p>Playlists: {playlists.total}</p>
    </div>
  );
}

export default Profile;
