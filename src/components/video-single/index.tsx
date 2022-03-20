import React, { useEffect, useState } from "react";
import { IThumbnail, IVideo } from "../../interfaces/video.interface";
import "./video-single.scss";

function VideoSingle(props: { id: string; video: IVideo }) {
  const { video } = props;
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  const calcScreenType = () => {
    if (screenSize.dynamicWidth <= 576) {
      return "sm";
    } else if (screenSize.dynamicWidth <= 768) {
      return "md";
    } else {
      return "lg";
    }
  };

  const renderThumbnail = (thumbnails: IThumbnail) => {
    const screenType = calcScreenType();
    console.log(screenType);
    switch (screenType) {
      case "sm":
        return thumbnails.default.url;
      case "md":
      default:
        return thumbnails.medium.url;
    }
  };

  const renderDescription = (video: IVideo) => {
    if (calcScreenType() === "sm") return "";
    return video.description;
  };

  function formatTimeAgo(date: Date) {
    const formatter = new Intl.RelativeTimeFormat(undefined, {
      numeric: "auto",
    });
    const DIVISIONS = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: Number.POSITIVE_INFINITY, name: "years" },
    ];
    let duration = (new Date(date).getTime() - new Date().getTime()) / 1000;

    for (let i = 0; i <= DIVISIONS.length; i++) {
      const division = DIVISIONS[i];
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name as any);
      }
      duration /= division.amount;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  console.log(screenSize);

  return (
    <div className="row video" key={video.id}>
      <div className="right-side">
        <img
          className="video-thumbnail"
          src={renderThumbnail(video.thumbnails)}
          alt="video thumbnail"
        />
      </div>
      <div className="left-side">
        <div className="column">
          <h2 className="title">{video.title}</h2>
          <p className="channel-info">
            {video.channelTitle} * 54M views *{" "}
            {formatTimeAgo(video.publishedAt as Date)}
          </p>
          <p className="description">{renderDescription(video)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSingle;
