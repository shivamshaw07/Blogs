import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchData,page } = useContext(AppContext);

  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <div className="flex flex-col items-cente h-[100vh]">
      <Header />
      <Pagination />
      <Mobile />
    </div>
  );
}

export default App;
