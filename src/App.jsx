import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProfilePage from "./pages/Profile/profile";
import Recruitment from "./pages/Recruitment";
import "./App.css";
import { CandidateProvider } from "./Contexts/candidatesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CandidateProvider>
        <Routes>
          <Route path="/" element={<Recruitment />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </CandidateProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
