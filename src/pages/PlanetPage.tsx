import NavBar from "../components/NavBar";
import {useParams} from "react-router-dom";
import planets from "../planets";

import "../sass/planetPage.scss"
function PlanetPage(): JSX.Element {
    const {planet}  = useParams();
    const planet_indexes = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]
    let curPlanet = {}
    if (planet != null) {
        curPlanet = planets[planet_indexes.indexOf(planet)]
        console.log(curPlanet)
    }
    return (
        <div>
            <NavBar active_tab={planet ? planet:'none'}/>
            <div className="planet-page-container">
                <div className="planet-image">

                </div>
            </div>
        </div>
    )
}

export default PlanetPage;