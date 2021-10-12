import { useContext } from 'react'
import { Link } from 'react-router-dom'

import TokenContext from '../contexts/User'

export default function Menu() {
    const context = useContext(TokenContext)

    let logout

    if (context.logged) {
        logout = (
            <li>
                <a href="#" onClick={() => { context.logout() }}>
                    <i className="material-icons left">exit_to_app</i>
                    Logout
                </a>
            </li>
        )
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        <i className="material-icons">movie_filter</i>
                        Movies Client
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/movies">
                                <i className="material-icons left">list</i>
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/dummy">
                                <i className="material-icons left">star</i>
                                Favorites
                            </Link>
                        </li>
                        { logout }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
