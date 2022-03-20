import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchVideosFromYoutubeAPI } from "./videosAPI";
import { IVideosListState } from "../../interfaces/videos.state.interface";
import { IYoutubeAPIResponse } from "../../interfaces/video.interface";

const initialState: IVideosListState = {
  searchQuery: "",
  loadingStatus: false,
  result: null,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetch",
  async (searchQuery: string): Promise<IYoutubeAPIResponse> => {
    const response = await fetchVideosFromYoutubeAPI(searchQuery);
    return response.data;
  }
);

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loadingStatus = false;
        state.result = action.payload;
      });
  },
});

export const selectResults = (state: RootState) => state.videos.result;
export const selectLoadingStatus = (state: RootState) => state.videos.loadingStatus;

export default videoSlice.reducer;
