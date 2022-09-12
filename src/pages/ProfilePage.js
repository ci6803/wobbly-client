import Container from '@mui/material/Container';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';


export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>

      <h1>Welcome back {user.name}</h1>
      <br>
      </br>
      <img src={user.image} alt="users-pic" width={300} />
      <p>Followers</p>
      <p>Rating</p>
      <p>Message</p>
      <Container>

      <p>List of fav festivals</p>

      </Container>
    </div>
  )
}
