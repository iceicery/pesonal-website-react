import './ProjectPopup.css';
import newsDemo from '../images/news-recording.webm';
export default function ProjectsPopup({ isOpen, project, handleClose }) {
    const overlayClass = isOpen ? "overlay" : "hidden";
    const popupClass = isOpen ? "popup" : "hidden";
    return (
        <>
            <div className={overlayClass}></div>
            <section className={popupClass}>
                <video controls className="popup__video">{
                    project === "news" && <source src={newsDemo} type="video/webm" />
                }
                </video>
                <div className="popup__button-box">
                    <a
                        href="https://iceicery.github.io/web_project_4/dist/index.html"
                        target="_blank"
                        rel="noreferrer"
                    ><button className="popup__button">Go To WebSite</button></a>
                    <button className="popup__button" onClick={handleClose}>Close</button>
                </div>
            </section>
        </>
    )
}