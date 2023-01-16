import { useState } from 'react';
import Button from './Button'
import Dics from './Dics'


function random(n){
    return Math.ceil(Math.random()*n);
}

function App(){
    const [num,setNum] = useState(1);
    function handleClick(){
        // console.log('1')
        const nextNum = random(6);
        setNum(nextNum)
        // console.log(nextNum)
    }

    function resetClick(){
    setNum('1')
    }

    return(
        <div>
           
            <div>
               <Button text="start" onClick={handleClick}/>
               <Button text="reset" onClick={resetClick}/>
            </div>
            <figure>
                <Dics color="blue" num={num}/>
                <figcaption>
                    <dl>
                        <dt>총합</dt>
                        <dd>0</dd>
                        <dt>기록</dt>
                        <dd></dd>
                    </dl>
                </figcaption>
            </figure>
            
        </div>
    )
}

export default App;