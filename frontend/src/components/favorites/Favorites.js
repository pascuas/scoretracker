import React, {useContext, useEffect} from 'react'
import TeamContext from '../../context/team/teamContext';


const Favorites = () => {

    const teamContext = useContext(TeamContext);

    const { favorites, getFavs } = teamContext;

    useEffect(() => {
        getFavs();
        // eslint-disable-next-line
    }, []);

    console.log('favs', favorites)

    return (
        <div>
            <h1>Favs</h1>
        </div>
    )
}

export default Favorites
