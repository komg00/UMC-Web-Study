import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import AdPage from "./Components/AdPage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <AdPage />
        <Routes>
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
