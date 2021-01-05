import CodeButton from "../CodeButton/CodeButton";
import Tech from "../Tech/Tech";

export default function Project({ image, handleClickDemo, text, Link, techs, codes }) {
    return (
        <li className="projects__item">
            <div className="projects__img-box">
                <img src={image} className="projects__img" alt="project" />
                <div className="projects__button-box">
                    <button className="projects__button" onClick={handleClickDemo}>Demo</button>
                    <a
                        href={Link.news.website}
                        target="_blank"
                        rel="noreferrer" className="projects__button-link"><button className="projects__button">Link</button></a>
                </div>
            </div>
            <h3 className="projects__title">{text}</h3>
            <ul className="projects__tech">
                {techs.map((item, i) => <Tech tech={item} key={i} />)}
                {codes.map((item, i) => <CodeButton Link={item.link} Name={item.name} key={i} />)}
            </ul>
        </li>
    )
}