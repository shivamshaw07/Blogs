import { baseUrl } from "../baseurl";
import { useState, createContext } from "react";

export const AppContext = createContext();


function AppContextProvider({children}){
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [totalPage,setTotalPage] = useState(null)
    const [posts,setPosts] = useState([])

    async function fetchData(page = 1){
        setLoading(true)
        try {
            const res = await fetch(`${baseUrl}?page=${page}`);
            const data = await res.json();
            console.log(data)
            setPage(data?.page)
            setTotalPage(data?.totalPages)
            setPosts(data?.posts)
        } catch (error) {
            alert("Data not found")
            setPage(1)
            setTotalPage(null)
            setPosts([])
        }
        setLoading(false)
    }
    
    function pageHandler(page){
        setPage(page)
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        loading,
        setLoading,
        pageHandler,
        fetchData,
    }

    return <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>

}


export default AppContextProvider


