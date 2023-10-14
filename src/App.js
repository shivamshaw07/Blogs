import { useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import Spinner from "./components/Spinner";

function App() {
  const { fetchData,page,loading } = useContext(AppContext);

  useEffect(() => {
    fetchData(page);
  }, [page]);
  return (
    <div className="flex flex-col items-cente h-[100vh]">
      <Header />
      {loading? <Spinner/> : <Pagination/>}
      <Mobile />
    </div>
  );
}

export default App;
