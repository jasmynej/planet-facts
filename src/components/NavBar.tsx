import '../sass/layout.scss'
import {NavLink} from "react-router-dom";
function NavBar({active_tab}:{active_tab:string}): JSX.Element{
    return (
        <div className="nav-container">
            <div className="nav-brand">
                <h2 id="brand">The Planets</h2>
            </div>
            <nav id="nav-elements">
                <div className={(active_tab === 'mercury'? 'active-mercury nav-item':'nav-item')}>
                    <NavLink to="/mercury"><h4>mercury</h4></NavLink>
                </div>
                <div className={(active_tab === 'venus'? 'active-venus nav-item':'nav-item')}>
                    <NavLink to="/venus"><h4>venus</h4></NavLink>
                </div>
                <div className={(active_tab === 'earth'? 'active-earth nav-item':'nav-item')}>
                    <NavLink to="/earth"><h4>earth</h4></NavLink>
                </div>
                <div className={(active_tab === 'mars'? 'active-mars nav-item':'nav-item')}>
                    <NavLink to="/mars"><h4>mars</h4></NavLink>
                </div>
                <div className={(active_tab === 'jupiter'? 'active-jupiter nav-item':'nav-item')}>
                    <NavLink to="/jupiter"><h4>jupiter</h4></NavLink>
                </div>
                <div className={(active_tab === 'saturn'? 'active-saturn nav-item':'nav-item')}>
                    <NavLink to="/saturn"><h4>saturn</h4></NavLink>
                </div>
                <div className={(active_tab === 'uranus'? 'active-uranus nav-item':'nav-item')}>
                    <NavLink to="/uranus"><h4>uranus</h4></NavLink>
                </div>
                <div className={(active_tab === 'neptune'? 'active-neptune nav-item':'nav-item')}>
                    <NavLink to="/neptune"><h4>neptune</h4></NavLink>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;