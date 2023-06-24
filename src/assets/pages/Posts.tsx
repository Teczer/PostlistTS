import { useEffect, useState } from "react";
import Postslist from "../components/Postslist";
import "./posts.css";

export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);
  console.log("allPosts", allPosts);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`
      );
      const data: PostData[] = await response.json();
      setAllPosts(data);
    };

    getPosts();
  }, []);
  return (
    <div className="post-container">
      <h1>Page Principale</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="posts">Nombre de publications 5</label>
        <input
          type="range"
          min={1}
          max={20}
          onChange={(e) => console.log("target", e.target.value)}
        />
        <Postslist />
      </div>
    </div>
  );
};

export default Posts;
