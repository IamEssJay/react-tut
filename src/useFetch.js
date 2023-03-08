import { useState, useEffect } from "react";
const useFetch=(url)=>{

    const [data, setData] = useState(null);
    const [IsLoading, setIsLoading]= useState(true);
    const [error, setEror]= useState(null);

   
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
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
            setIsLoading(false);
            setEror(e.message)
        })
        }, 1000)
    }, [url]);

    return{ data, IsLoading, error}
}

export default useFetch