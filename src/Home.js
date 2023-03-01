import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [IsLoading, setIsLoading]= useState(true);
    const [error, setEror]= useState(null);

   
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error("Can't fetch data");
            }
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
            setIsLoading(false);
            setEror(null)
        }).catch((e)=>{
            setIsLoading(false);
            setEror(e.message)
        })
        }, 1000)
    }, []);

    return ( 
         <div className="home">
            {error && <div>{error}</div>}
            {IsLoading && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
         </div>
     );
}
 
export default Home;