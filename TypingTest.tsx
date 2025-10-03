import  { useState } from 'react';

function TypingTest() {
    const [typedText, setTypedtext] = useState<string>(' ');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTypedtext(e.target.value);
    }
    return(
        <div>
            <input type="text" value={typedText} onChange={handleChange}/>
            <p>You Typed: {typedText}</p>
        </div>
    )
}

export default TypingTest;