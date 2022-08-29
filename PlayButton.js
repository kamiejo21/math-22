import React from 'react';
import {Link} from 'react-router-dom';

function PlayButton() {
    return(
        <Link className="btn btn-sm btn-success" to="/play">Go</Link>
    )
}

export default PlayButton;