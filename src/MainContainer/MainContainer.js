import './MainContainer.css'
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
const MaainContainer = () => {
    return ( 
        <div className="main-container">
            <div className="main-top-container">
                <div className="heading">Simple Note Taking App</div>
                <div className="info">Source Code : <a href="https://github.com/rahman351/notebook">https://github.com/rahman351/notebook</a></div>
            </div>
            <div className="main-bottom-container">
                <LeftPane/>
                <RightPane/>
            </div>
        </div>
     );
}
 
export default MaainContainer;