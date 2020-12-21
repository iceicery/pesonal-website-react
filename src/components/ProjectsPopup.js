import PopupItem from "./PopupItem";

export default function ProjectsPopup() {
    return (
        <>
            <div className="overlay"></div>
            <section className="popup">
                <ul className="popup__list">
                    <PopupItem />
                </ul>
            </section>
        </>
    )
}