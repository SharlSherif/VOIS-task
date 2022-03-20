import axios from "axios";
import env from "../../config";
// A mock function to mimic making an async request for data
export async function fetchVideosFromYoutubeAPI(query: string) {
  const response = await axios.get(
    `${env.API}?key=${env.key}&part=snippet&maxResults=50&q=${query}`
  );
  return response
}
