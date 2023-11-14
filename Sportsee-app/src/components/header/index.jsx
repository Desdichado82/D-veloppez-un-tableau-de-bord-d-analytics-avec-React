import  '@fontsource/roboto';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package

const SportseeHeader = styled.header`
background-color: black;
font-family: Roboto;
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding:2rem;
margin-top:0px;
/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  flex-direction: row; // Stack elements vertically
  align-items: flex-start; // Align navigation links to the start
}
`;

// Styled component for the Kasa logo in the header
const SportseeLogocontainer = styled.div`
display:flex;
justify-content:center;

  
`;

// Styled component for the Kasa logo in the header
const SportseeLogo = styled.div`
  display:flex;
  justify-content:center;
  vertical-align:center;
  width: 57.2px;
  height: 57.2px;
  background-color:red;
  border-radius:50%;
  color:black;

  i{
    color:black;
    font-size:2.8rem;
    align-self: center;
  }
  @media (max-width: 768px) {
    width: 145px;
    height: 46.88px;
  }
`;

// Styled component for the Kasa logo in the header
const SportseeMoto = styled.span`
    display: flex;
    align-items: center;
    padding: 0.5em;
  font-size:1.5rem;
  color:red;
  @media (max-width: 768px) {
  color:red;
  }
`;

// Styled component for the navigation links in the header
const SportseeNav = styled.nav`
 display:flex;
 width:100%;
  ul {
    width:100%;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        color: #ffff;
        text-decoration: none;
        

        &:hover,
        &:active {
          
        }
      }
    }
  }
`;

const Header = ()=>{
    return(
        <SportseeHeader>
            <SportseeLogocontainer>
            <SportseeLogo> <i className="material-icons">directions_run</i> {/* Use Material Icons */}
</SportseeLogo>
            <SportseeMoto>Sportsee</SportseeMoto>
            </SportseeLogocontainer>
            <SportseeNav>
            <ul>
          <li>
            <Link to="/">Accueil</Link> {/* Home link */}
          </li>
          <li>
            <Link to="/Propos">Profile</Link> {/* About link */}
          </li>
          <li>
            <Link to="/Propos">Réglage</Link> {/* About link */}
          </li>
          <li>
            <Link to="/Propos">Communauté</Link> {/* About link */}
          </li>
        </ul>
            </SportseeNav>
        </SportseeHeader>
    )
}



export default Header;