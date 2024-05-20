import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function getPhotos(searchquery, page) {
  try {
    const response = await axios.get("search/photos", {
      params: {
        client_id: "h91otUVv6TzHHuhNrMf1aGC6q6TtM85xPElHtw66Bo4",
        query: searchquery,
        page: page,
      },
    });
    console.log(response.data.results);
    return response.data.results;
  } catch {
    toast.error("Server error. Please try again!");
  }
}
