import Button from './Button'
import Dics from './Dics'

function App(){
    return(
        <div>
           
            <div>
               <Button text="start"/>
               <Button text="reset"/>
            </div>
            <Dics color="blue" num="1"/>
        </div>
    )
}

export default App;