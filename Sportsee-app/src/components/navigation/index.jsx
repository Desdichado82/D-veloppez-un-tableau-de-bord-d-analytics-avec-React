import  '@fontsource/roboto';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package

const NavigationVertical = styled.nav`
background-color: black;
font-family: Roboto;
width: 117px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding:1rem;
margin:0px;
ul {
    width:100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction:column;
    gap:1rem;
    justify-content: center;
    align-items:center;

    li {
     
      background-color:white;
      width:64px;
      height:64px;
      border-radius:6px;
      display:flex;
      justify-content:center;
      align-items:center;

      &:last-child {
        margin-right: 0;
      }

  

      i {
        color: red;
        font-size:2rem;
    
        

        &:hover,
        &:active {
          
        }
      }
    }
  }

  span{
    display:flex;
    color:white;
    width:138px;
    transform: rotate(90deg);
    font-size:0.7rem;
    
  }

/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  flex-direction: row; // Stack elements vertically
  align-items: flex-start; // Align navigation links to the start
}
`;

const Navigation = ()=>{
    return(

        <NavigationVertical>
            <ul>
          <li>
            <Link to="/"><i className="material-icons">self_improvement</i></Link> {/* Home link */}
          </li>
          <li>
            <Link to="/"><i className="material-icons">pool</i></Link> {/* About link */}
          </li>
          <li>
            <Link to="/"><i className="material-icons">directions_bike</i></Link> {/* About link */}
          </li>
          <li>
            <Link to="/"><i className="material-icons">fitness_center</i></Link> {/* About link */}
          </li>
        </ul>
        <span>Copyright, SportSee 2020</span>
        </NavigationVertical>
    );

}

export default Navigation;