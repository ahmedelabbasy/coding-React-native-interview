import axios from "axios";
import { API_KEY, API_URL, FETCH_MOVIES_API_ERROR } from "../constants";
import { Movie } from "../types";
interface ApiResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMoviesAPI = async (pageNumber: number): Promise<ApiResponse[]> => {
  try {
    const response = await axios.get(
      `${API_URL}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(FETCH_MOVIES_API_ERROR);
  }
};
