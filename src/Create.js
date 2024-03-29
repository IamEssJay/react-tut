import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const[title, setTitle]= useState("")
    const[author, setAuthor]= useState("")
    const[body, setBody]= useState("")
    const[IsLoading, setIsLoading]=useState(false)
    const history= useHistory()


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title, body, author};
        setIsLoading(true);
        console.log(blog)
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog),
        }).then(()=>{
        console.log('new blog added')
        history.push('/')
        setIsLoading(false)
    })
    }

    

    return ( 
        <div className="create">
            <h2>Add a new page</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                placeholder="Title" 
                type="text" 
                required 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Author</label>
                <input 
                placeholder="Author" 
                type="text" 
                required 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                />
                
                <label>Blog Body </label>
                <textarea 
                placeholder="Content"
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                {!IsLoading && <button>Add Blog</button>}
                {IsLoading && <button disabled>Adding..</button>}
            </form>
        </div>
     );
}
 
export default Create;