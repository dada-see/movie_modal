import MovieItem from "./MovieItem";

const MovieList = ({dummy, yearCategory, search}) => {


    const filterSearch = () => {
        const filterDummy = yearCategory === 'all' ? dummy : dummy.filter((it) => (it.year === yearCategory))
        return search === '' ? filterDummy : filterDummy.filter((it)=>(it.title.toLowerCase().includes(search.toLowerCase())))
    }


    return(
        <div className="movieList">
            {filterSearch().map((it) => (
                <MovieItem key={it.id} {...it} />
            ))}
        </div>
    )
}

export default MovieList;