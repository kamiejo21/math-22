import React from 'react';
import SelectInput from '../components/SelectInput';
import PlayButton from '../components/PlayButton';
import './Main.css';


function Main(props) {
    const operations = [
        ['Addition', '+'],
        ['Subtraction', '-'], 
        ['Multiplication', 'x'],
        ['Division', '/']
    ];
    const numbers = [];
    for (let number = 2; number <= 100; number++) {
        numbers.push([number, number]);
    }
    return(
        <main>
            <div className="row mx-1 my-3">
                <SelectInput style={{textAlign:'left'}}label="OPERATION" id="operation" currentValue={props.operation} 
                setCurrentValue={props.setOperation}
                values={operations} />
            </div>
            <div className="row mx-1 my-3">
                <SelectInput style={{textAlign:'left'}} label="MAX NUMBER" id="max-number" currentValue={props.maxNumber}
                setCurrentValue={props.setMaxNumber}
                values={numbers}/>
            </div>
            <div className="row mx-1 my-3">
                <PlayButton />
            </div>
            <div style={{textAlign:'left'}}>
                <h8>1. Choose Operation.</h8><br />
                <h8>2. Choose Max Number.</h8><br />
                <h8>3. Press Go.</h8><br />
                <h8>4. How many problems can you solve in 30 seconds?</h8>
            </div>
        </main>
    )
}

export default Main;