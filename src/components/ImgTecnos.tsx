import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.svg';
import js from '../assets/javascript.png';
import node from '../assets/Node.png';

export function ImgTecnos(){
    return(
        <div className="imgTecnos">
            <img className="imgSmall" alt="css3" src={css} />
            <img className="imgSmall" alt="html5" src={html} />
            <img className="imgMedium" alt="ReactJs" src={react} />
            <img className="imgSmall" alt="JavaScript" src={js} />
            <img className="imgSmall" alt="NodeJs" src={node} />
        </div>
    );
}