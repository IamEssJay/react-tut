import { useState } from "react";

const Create = () => {
    const[title, setTitle]= useState("")
    const[author, setAuthor]= useState("")
    const[body, setBody]= useState("")
    const[IsLoading, setIsLoading]=useState(false)


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
        setAuthor("")
        setBody("")
        setTitle("")
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
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <label>Blog Body </label>
                <textarea 
                placeholder="Content"
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                {!IsLoading && <button>Add Blog</button>}
                {IsLoading && <button disabled>Adding..</button>}
                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;