import React from "react";
import VideosList from "../../components/videos-list";
import { IVideo } from "../../interfaces/video.interface";

const Home = () => {
  return (
    <article className="container container-md container-sm">
      <VideosList />
    </article>
  );
};

export default Home;
