import './MainContainer.css'
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';
const MaainContainer = () => {
    return ( 
        <div className="main-container">
            <div className="main-top-container">main-top-container</div>
            <div className="main-bottom-container">
                <LeftPane/>
                <RightPane/>
            </div>
        </div>
     );
}
 
export default MaainContainer;