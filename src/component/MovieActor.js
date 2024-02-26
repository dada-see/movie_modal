const MovieActor = ({name, char, photo}) => {
    return(
        <li className="movieActor">
            <p className="photo"><img src={photo} alt="actorPhoto"/></p>
            <p className="name">{name}</p>
            <p className="char">{char}</p>
        </li>
    )
}

export default MovieActor;