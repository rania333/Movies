import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import instance from '../../instance';
import {useDispatch, useSelector} from 'react-redux';
import {favMovie, removeMovie} from '../../store/action';
export default function Home() {
    const [movies, setMovies] = useState([]);
    let [count, setCount] = useState(1);
    const dispatch = useDispatch();
    //favMovies
    const selector = useSelector((state) => state.favMovies);

    const myAPI = '1c806f1f768a2e0d31d46f2479a0ee17';
    useEffect(() => {
        instance.get(`/popular?api_key=${myAPI}&page=${count}`)
        .then(movie => {
            const allMovies = movie.data.results;
            setMovies(allMovies);
        })
        .catch(err => {
            console.log(err);
        })
    }, [count]);
    let prevHandler = () => {
        let newIndex = (count==1) ? count : --count;
        setCount(newIndex);
    }
    let nextHandler = () => {
        let newIndex = ++count;
        setCount(newIndex);
    }
    let EditFav = (e, movie) => {
        if (e.target.className == 'bi bi-heart') {
            dispatch(favMovie(movie));
            e.target.className = 'bi bi-heart-fill text-danger';
        } else {
            dispatch(removeMovie(movie));
            e.target.className = 'bi bi-heart';
        }
    }
    let checkFavMovie = (id) => {
        let exist = selector.find(movie => movie.id == id)
        return exist;
    }
    return (
        <div className='container'>
            <div className="row justify-content-between py-5">
                <button type="button" className="btn btn-info col-2"
                onClick={() => prevHandler()}>
                    prev
                </button>
                <button type="button" className="btn btn-info col-2"
                onClick={() => nextHandler()}>next</button>
            </div>
            <div className="row">
                {movies.map((movie, index) => {
                    let pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                    return (
                    <div className="col-3 py-2" key={index}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={pic} className="card-img-top" style={{ height: '15rem'}}/>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">
                                    {movie.vote_count}
                                </p>
                                {checkFavMovie(movie.id) == undefined ? (
                                <h2>
                                    <i onClick={(e) => EditFav(e, movie)} 
                                    className="bi bi-heart"></i>
                                </h2>) : (
                                    <h2>
                                    <i onClick={(e) => EditFav(e, movie)} 
                                    className="bi bi-heart-fill text-danger"></i>
                                </h2>
                                )}
                                {/* <h2>
                                    {checkFavMovie(movie.id)}
                                </h2> */}
                                <Link to={`/details/${movie.id}`} 
                                className="btn btn-info">
                                    More Details</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
