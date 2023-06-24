import { useEffect, useState } from "react";
import Postslist from "../components/Postslist";
import "./posts.css";

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      console.log(data);
      setAllPosts(data);
    };
    getPosts();
  }, []);
  return (
    <div className="post-container">
      <h1>Page Principale</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="posts">Nombre de publications 5</label>
        <input type="range" min={1} max={20} />
        <Postslist />
      </div>
    </div>
  );
};

export default Posts;
