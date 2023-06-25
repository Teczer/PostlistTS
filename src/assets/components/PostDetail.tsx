import { Link } from "react-router-dom";
import { PostData } from "../interfaces";
import "./postdetail.css";

interface PostdetailProps {
  onePost: PostData | null;
}

const PostDetail: React.FC<PostdetailProps> = ({ onePost }) => {
  return (
    <div className="post">
      <h1>Publication numéro : {onePost?.id}</h1>
      <h2>Titre : {onePost?.title}</h2>
      <p>{onePost?.body}</p>
      <Link to="/">Page Principale</Link>
    </div>
  );
};

export default PostDetail;
