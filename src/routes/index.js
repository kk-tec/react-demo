import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Game from '@/modules/Game'
import Context from '@/modules/Context'
import CloneElement from '@/modules/cloneElement'

function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
                    <li>
                        <Link to="/clone">CloneElement</Link>
                    </li>
                </ul>

                <hr />

                <Route path="/game" component={Game} />
                <Route path="/context" component={Context} />
                <Route path="/clone" component={CloneElement} />
            </div>
        </Router>
    )
}

export default Routes
