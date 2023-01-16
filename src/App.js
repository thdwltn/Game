import { useState } from 'react';
import Button from './Button'
import Dics from './Dics'


function random(n){
    return Math.ceil(Math.random()*n);
}

function App(){
    const [num,setNum] = useState(1);
    const [sum,setSum] = useState(0);
    const [history,setHistory] = useState([]);

    function handleClick(){
        // console.log('1')
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        // const nextHistory = history.push(nextNum)
        setHistory([...history,nextNum]);
    }

    function resetClick(){
    setNum(1)
    setSum(0)
    setHistory([0])
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
                        <dd>{sum}</dd>
                        <dt>기록</dt>
                        <dd>{history}</dd>
                    </dl>
                </figcaption>
            </figure>
            
        </div>
    )
}

export default App;