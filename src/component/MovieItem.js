import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieItem = ({id, title, year, age, runningTime, point, director, actor, summary, poster, bg}) => {

    const [isModal, setIsModal] = useState(false);
    
    const showModal = () => {
        setIsModal(true)
    }

    const closeModal = (t) => {
        setIsModal(false);
    }

    return(
        <div className="movieItem">
            <div className="post">
                <img src={poster} alt="포스터"/>
                <p className="over">
                   <button onClick={showModal}>상세정보</button>
                </p>
            </div>
            <p className="title">{title}</p>
            <div className="txt">
                <p>{age} 관람가</p>
                <p>{runningTime}분</p>
                <p className="star">
                    <span className="material-symbols-outlined">star</span>
                    <span>{point}</span>
                </p>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal id={id} title={title} year={year} age={age} runningTime={runningTime} point={point} director={director} actor={actor} summary={summary} poster={poster} bg={bg} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default MovieItem;