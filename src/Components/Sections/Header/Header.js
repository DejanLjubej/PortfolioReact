import React from 'react'
import './Header.css';
import NavigationButton from './Components/NavigationButton.js';
import {Link} from 'react-router-dom';

const navigationButtonStyle = "navigationButtonStyle";
const navigationStyle ="navigationStyle";
function Header() {
    
    return (
            <div>
                <header className="headerMain">
                    <div className="divWrapperOnHeader">
                        <div className={"nameDiv " + navigationStyle}>
                            <Link to="/homePage">
                            Dejan Ljubej
                            </Link>
                        </div>
                        <div className={"firstNavigationDiv " + navigationStyle}>
                            <NavigationButton name="Projects" className={navigationButtonStyle} to="/projects"/>
                            <NavigationButton name="Work experience" className={navigationButtonStyle} to="/workexperience" />
                        </div>
                        <div className={"secondNavigationDiv " + navigationStyle}>
                            <NavigationButton name="Education" className={navigationButtonStyle} to="/education" />
                            <NavigationButton name="Skills" className={navigationButtonStyle} to="/skills" />
                        </div>
                    </div>
                </header>
            </div>
    )
}

export default Header
// export default class Header extends Component {
//     render() {
//         function handleClick(e) {
//             e.preventDefault();
//             console.log('The link was clicked.');
//         }
//         const navigationButtonStyle = "navigationButtonStyle";
//         const navigationStyle ="navigationStyle";
//         return (
//             <div>
//                 <header className="headerMain">
//                     <div className="divWrapperOnHeader">
//                         <div onClick={handleClick} className={"nameDiv " + navigationStyle}>
//                             Dejan Ljubej
//                         </div>
//                         <div className={"firstNavigationDiv " + navigationStyle}>
//                             <Link to="homePage">
//                                 <button className={navigationButtonStyle}>Projects</button>
//                             </Link>
//                             <button className={navigationButtonStyle}>Work  related experience</button>
//                         </div>
//                         <div className={"secondNavigationDiv " + navigationStyle}>
//                             <button className={navigationButtonStyle} >Education</button>
//                             <button className={navigationButtonStyle}>Skills</button>
//                         </div>
//                     </div>
//                 </header>
//             </div>
//         )
//     }
// }
