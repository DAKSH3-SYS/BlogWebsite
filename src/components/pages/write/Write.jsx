import "./write.css";
import axios from "axios";
import { useState } from 'react';

const endpoint = "https://krat.es/19a8f89e98c110186ed4";

export default function Write() {

    const [sub, setSub] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        // e.preventDefault();
        e.preventDefault();
        console.log(sub, content);
      }

    return (
        <div className="write">
            <img className="writeImg"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="writeInput" 
                        autoFocus={true}
                        onChange={(e)=>setSub(e.target.value)} 
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your story.... " type="text" 
                        className="writeInput writeText"
                        onChange={(e)=>setContent(e.target.value)}
                    />
                    {/* </textarea> */}
                </div>
                <button className="writeSubmit" onClick={handleSubmit}>Publish</button>
            </form>
        </div>
    )
}
