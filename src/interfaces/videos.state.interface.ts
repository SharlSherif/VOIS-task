import { IYoutubeAPIResponse } from "./video.interface";

export interface IVideosListState {
  searchQuery: string;
  loadingStatus: boolean;
  result: IYoutubeAPIResponse | null;
}
