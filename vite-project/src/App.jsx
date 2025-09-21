import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./Profile";


function App() {
const users = [
  { name: "Mikasa", role: "Frontend Developer", avatarUrl: "https://imgix.ranker.com/user_node_img/50088/1001741411/original/merciless-world-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=500" },
  { name: "Armin",  role: "Backend Developer",  avatarUrl: "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png" },
  { name: "Eren",   role: "UI/UX Designer",    avatarUrl: "https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png" },
  { name: "Jean",   role: "QA Engineer",       avatarUrl: "https://www.pngkey.com/png/detail/228-2286323_jean-kirschtein-shingeki-no-kyojin-game-characters.png" },
  { name: "Sasha",  role: "Project Manager",   avatarUrl: "https://cdn.staticneo.com/w/attackontitan/SashaBlouse.jpg"},
];
  return (
    <div>
      <h1>The exploration team</h1>
      {users.map((user, index) => (
        <Profile
          key={index}
          name={user.name}
          role={user.role}
          avatarUrl={user.avatarUrl}
        />
      ))}
    </div>
  );
}

export default App
