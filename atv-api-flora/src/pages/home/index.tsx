import React, { useEffect, useState } from "react";
import '../../styles/homePage.css'

interface IComments {
  body: string;
  id: number;
  name: string;
  email: string;
  postId: number;
}

const HomePage: React.FC = () => {
  const [comments, setComments] = useState<IComments[]>([]);
  const [showComments, setShowComments] = useState(false);

  const getComments = async () => {
    const commentsList = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((response) => response.json());
    return commentsList;
  };

  useEffect(() => {
    if (showComments) {
      getComments().then((response) => {
        setComments(response);
      });
    }
  }, [showComments]);

  const loadingAPI = (): void => {
    setShowComments(true);
  };

  const noLoadingAPI = (): void => {
    setShowComments(false);
    setComments([]);
  }

  return (
    <>
      <div className="buttonAPI">
        <button onClick={async () => loadingAPI()}>Mostrar API</button>
        <button onClick={async () => noLoadingAPI()}>Não Mostrar API</button>
      </div>
      {comments.map((listComments) => (
        <>
          <div>
            <p>{listComments.email}</p>
            <span>{listComments.name}</span>
          </div>
          <br />
        </>
      ))}
    </>
  );
};

export default HomePage;
