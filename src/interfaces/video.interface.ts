export interface IYoutubeAPIResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}

export interface Item {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: IVideo;
}

export interface IVideo {
  id: string;
  publishedAt: Date | string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnail;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: Date | string;
}

export interface IThumbnail {
  default: {
    url: string;
    width: number;
    height: number;
  };
  medium: {
    url: string;
    width: number;
    height: number;
  };
  high: {
    url: string;
    width: number;
    height: number;
  };
}
