// named export 
export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const SEARCH_SUGGESTIONS_API = process.env.REACT_APP_SEARCH_SUGGESTIONS_API;

export default API_KEY; // default export



// export const API_KEY = "AIzaSyDD5BpZSzVz_mh1w079o8sZ2mpvsa6_gt8";
// export const BASE_URL = "https://www.googleapis.com/youtube/v3"
// export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
// export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// export default API_KEY; // default export