import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from '@/modules/Game'
// import Context from '@/modules/Context'

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
                </ul>

                <hr />

                <Route path="/game" component={Game} />
                {/* <Route path="/context" component={Context} /> */}
            </div>
        </Router>
    );
}

export default Routes;