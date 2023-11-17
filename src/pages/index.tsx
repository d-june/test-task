import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import PostPage from "./postPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default Routing;
