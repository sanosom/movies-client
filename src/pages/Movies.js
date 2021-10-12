import { Component } from "react"
import { matchPath  } from "react-router"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"

import AppApi from '../movies-api-client'

import TokenContext from '../contexts/User'
import PaginationContext from '../contexts/Pagination'

import Movie from '../components/Movie'
import MovieList from '../components/MovieList'
import Pagination from "../components/Pagination"


class Movies extends Component {
    static contextType = TokenContext

    constructor(props) {
        super(props)

        this.changePage = (page) => {
            if (!page || page < 1) {
                page = 1
            }
            
            const api = new AppApi.MoviesApi()

            api.getPublicMovies({ page }, (error, data) => {
                if (error) {
                    window.M.toast({html: 'Can\'t load movies, please try again.'})
                } else {
                    this.setState({
                        page: page,
                        count: data.count,
                        movies: data.movies,
                    })
                }
            })
        }

        this.clickFavorite = (id) => {
            let { favorites } = this.state
            const index = favorites.indexOf(id)

            if (index === -1) {
                favorites.push(id)
            } else {
                favorites.splice(index, 1)
            }

            this.setState({
                favorites
            }, () => {
                window.localStorage.setItem('favorites', JSON.stringify(favorites))
            })
        }

        this.state = {
            page: 1,
            count: 0,
            movies: [],
            favorites: JSON.parse(window.localStorage.getItem('favorites') || '[]'),
            changePage: this.changePage,
        }
    }

    componentDidMount() {
        const { page } = this.state

        this.changePage(page)
    }

    render() {
        if (!this.context.logged) {
            return <Redirect to="/" />
        }

        let movie

        const { movies, favorites } = this.state
        const contextValues = {
            page: this.state.page,
            count: this.state.count,
            changePage: this.changePage
        }
        const match = matchPath(this.props.location.pathname, {
            path: '/movies/:id',
            exact: true,
            strict: true,
        })

        if (match) {
            const { id } = match.params

            movie = movies.find(movie => movie.id == id)
        }

        return (
            <div className="container">
                <Switch>
                    <Route path="/movies/:id">
                        <Movie movie={movie} />
                    </Route>
                    <Route path="/movies">
                        <h1>Movies</h1>
                        <MovieList movies={movies} favorites={favorites} onClick={this.clickFavorite} />
                        <PaginationContext.Provider value={contextValues}>
                            <Pagination />
                        </PaginationContext.Provider>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Movies)
