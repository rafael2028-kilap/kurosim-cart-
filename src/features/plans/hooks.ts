import { useQuery } from "@tanstack/react-query";
import { plans } from "@/data/plans";

export const usePlans = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: async () => plans,
  });
};