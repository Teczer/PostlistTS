import { Routes, Route } from "react-router-dom";
import Posts from "./assets/pages/Posts";
import Post from "./assets/pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
