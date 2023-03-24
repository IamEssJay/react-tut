import { useEffect, useState } from "react";
import {db} from './firebase-config';
import {collection, getDocs}from 'firebase/firestore';

const Firetut = () => {
    const [users, SetUsers]= useState([]);
    const userCollectionref= collection(db, "Users")
    useEffect(()=>{
        const getUsers = async() => {
            const data = await getDocs(userCollectionref);
            console.log(data);
        };
        getUsers();
    }, []);

    return (
        <div className="firetut">
            <h2>Hello</h2>
        </div>
      );
}
 
export default Firetut;