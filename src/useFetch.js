import { useState, useEffect } from "react";
const useFetch=(url)=>{

    const [data, setData] = useState(null);
    const [IsLoading, setIsLoading]= useState(true);
    const [error, setEror]= useState(null);

   
    useEffect(()=>{
        const abortCont= new AbortController();
        setTimeout(()=>{
            fetch(url ,{ signal: abortCont.signal})
        .then(res =>{
            if(!res.ok){
                throw Error("Can't fetch data");
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsLoading(false);
            setEror(null)
        }).catch((e)=>{
            if(e ==='AbortError'){
                console.log("fetch Aborted")
            }else{
                setIsLoading(false);
                setEror(e.message)
            }
           
        })
        }, 1000)
        return ()=> abortCont.abort()
    }, [url]);

    return{ data, IsLoading, error}
}

export default useFetch