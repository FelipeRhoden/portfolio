type item = {
    link: string,
    title: string,
    alt: string,
    img: string
}

export function Itens(props: item){
    return (
        <a className="item" href={props.link} rel="noreferrer" target="_blank">
            <div>
                <img className="imgItem" alt={props.alt} src={props.img}/>
            </div>
        </a>
    );
}