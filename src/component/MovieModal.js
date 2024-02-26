import MovieActor from "./MovieActor";

const MovieModal = ({id, title, year, age, runningTime, point, director, actor, summary, poster, bg, closeModal}) => {

    const handleClose = () => {
        closeModal(id);
    }

    return(
        <div className="movieModal">
            <div className="modalWrap">
                <div className="bg"><img src={bg} alt="backgroundPhoto"/></div>
                <div className="info">
                    <p><img src={poster} alt="poster"/></p>
                    <div>
                        <p className="title">{title}<span> ({year})</span></p>
                        <div className="txt">
                            <p>{age} 관람가</p>
                            <p>{runningTime}분</p>
                            <p className="star">
                                <span className="material-symbols-outlined">star</span>
                                <span>{point}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cast">
                    <h3>Cast</h3>
                    <ul>
                        <li>
                            <p className="photo"><img src={director.photo} alt="directorPhoto" /></p>
                            <p className="name">{director.name}</p>
                            <p className="char">감독</p>
                        </li>
                        {actor.map((it) => (
                            <MovieActor key={it.id} {...it} />
                        ))}
                    </ul>
                </div>
                <div className="summary">
                    <h3>Synopsis</h3>
                    <p>{summary}</p>
                </div>
                <button onClick={handleClose}><span className="material-symbols-outlined">close</span></button>
            </div>
        </div>
    )
}

export default MovieModal;