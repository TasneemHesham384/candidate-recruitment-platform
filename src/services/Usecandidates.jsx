import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCandidates(filters) {
  return useQuery({
    queryKey: ["candidates", filters],

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3001/candidates");

      let result = [...data];

      // 🔍 Search
      if (filters.search?.trim()) {
        const searchTerm = filters.search.trim().toLowerCase();
        result = result.filter(
          (c) =>
            c.fullName?.toLowerCase().includes(searchTerm) ||
            c.headline?.toLowerCase().includes(searchTerm) ||
            c.skills?.some((skill) => skill.toLowerCase().includes(searchTerm)),
        );
      }

      // 🟢 Filters
      if (filters.status && filters.status !== "All") {
        result = result.filter((c) => c.status === filters.status);
      }

      if (filters.availability && filters.availability !== "All") {
        result = result.filter((c) => c.availability === filters.availability);
      }

      if (filters.experience && filters.experience !== "All") {
        result = result.filter(
          (c) => Number(c.yearsOfExperience) === Number(filters.experience),
        );
      }

      switch (filters.sortBy) {
        case "Highest Score":
          result.sort((a, b) => Number(b.score) - Number(a.score));
          break;

        case "Lowest Score":
          result.sort((a, b) => Number(a.score) - Number(b.score));
          break;

        default:
          result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
          break;
      }

      return result;
    },

    enabled: !!filters,
    staleTime: 1000 * 60 * 5,
  });
}
