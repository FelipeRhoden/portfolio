import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

export function Footer(){
    return (
        <footer className="myFooter">
            <a className="linkFooter" href="https://github.com/FelipeRhoden"  rel="noreferrer"target="_blank">
                <FaGithub />
            </a>
            <a className="linkFooter" href="https://www.linkedin.com/in/felipe-rhoden-364553192/" rel="noreferrer" target="_blank">
                <FaLinkedin />
            </a>
            <a className="linkFooter" href="mailto:feliperrhoden@gmail.com" rel="noreferrer" target="_blank">
                <FaEnvelope />
            </a>
        </footer>
    );
}