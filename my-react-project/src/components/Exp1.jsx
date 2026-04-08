//experiment 1 
import { useState } from 'react'
import "./header.css";

const Exp1 = () => {
    const [text, setText] = useState('')

    return (
      
        <div>
            <h1>Experiment 1: useState Hook</h1>
            <p>This is a simple example of using the useState hook in React.</p>
            <div>
                <label htmlFor="live-text">Type something below:</label>
                <input
                id="live-text"
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder='start typing...'
                />
                <div className='bgcolor'>
                  <h3>Live output:</h3>
                  <h2>{text || 'your text will appear here...'}</h2>
                </div>
               
            </div>
            <h2>{text}</h2>
        </div>
        
    )
}



export default Exp1
