import { createContext, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, updates }) => {
      return axios.patch(`http://localhost:3001/candidates/${id}`, updates);
    },

    // 🔥 FIX: تحديث كل الـ queries المهمة
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["candidates"] });

      queryClient.invalidateQueries({
        queryKey: ["candidate", variables.id],
      });
    },
  });

  // ⭐ SHORTLIST
  const toggleShortlist = (id, currentStatus) => {
    mutation.mutate({
      id,
      updates: {
        isShortlisted: !currentStatus,
      },
    });
  };

  // ❌ REJECT / UNREJECT
  const rejectCandidate = (id, currentStatus) => {
    const newStatus =
      currentStatus === "Rejected" ? "Open to work" : "Rejected";

    mutation.mutate({
      id,
      updates: {
        status: newStatus,
        isShortlisted: false, // دايمًا نشيل الشورت ليست مع الريجكت
      },
    });
  };

  return (
    <CandidateContext.Provider
      value={{
        toggleShortlist,
        rejectCandidate,
        isUpdating: mutation.isPending,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

// safe hook
export const UseCandidatesContext = () => {
  const context = useContext(CandidateContext);

  if (!context) {
    throw new Error(
      "UseCandidatesContext must be used inside CandidateProvider",
    );
  }

  return context;
};
