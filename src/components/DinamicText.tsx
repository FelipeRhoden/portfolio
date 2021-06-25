import { useEffect, useState } from "react";

export function DinamicText(){

    const [text, setText] = useState('');

    let setTime = true;
    let countText = 0;
    let contLetter = 0;
    let newText = '';
    let upDown = true;
    const texts = [
        'Dev Web',
        'Entusiasta',
        'Empolgado',
        'Proativo'
    ]

    useEffect(()=>{
        if (setTime)
            timeText()
        // eslint-disable-next-line 
    },[])

    function timeText(){
        setTime = false;
        if (countText >= texts.length) countText = 0;

        if(upDown){
            newText += texts[countText][contLetter]; 
            contLetter++
            if(contLetter >= texts[countText].length){
                upDown = false;
                setText(newText);
                return setTimeout(timeText, 2000)
            }

        }else{
            newText = newText.slice(0, contLetter)
            contLetter--
        }

        if(contLetter < 0){
                setText('')
                countText++;
                contLetter++;
                upDown = true;
                
        } else {
            setText(newText);
        }

        setTimeout(timeText, 50)

    }

    return (
        <h2 className="title2">{`<${text} />`}</h2>
    );
}