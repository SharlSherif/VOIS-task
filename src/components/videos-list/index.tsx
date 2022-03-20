import React, { useEffect, useState } from "react";
import "./videos-list.scss";
import { Item } from "../../interfaces/video.interface";
import VideoSingle from "../video-single";
import Filter from "../filter";
import {
  selectLoadingStatus,
  selectResults,
} from "../../redux/slicers/videosSlice";
import {useAppSelector } from "../../app/hooks";
import Spinner from "../spinner";

const VideosList = () => {
  const results = useAppSelector(selectResults);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (results) {
      setItems(results.items);
    }
  }, [results]);

  const RenderListOfVideoResults = () => {
    if (loadingStatus) return <Spinner />;
    // note that each item contains a video snippet
    return items.map((item) => (
      <VideoSingle id={item.id.videoId} video={item.snippet} />
    ));
  };

  return (
    <div className="videos-list">
      <Filter data={{ resultsCount: items.length }} />
      {RenderListOfVideoResults()}
    </div>
  );
};

export default VideosList;
