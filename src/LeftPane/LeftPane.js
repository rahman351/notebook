import './LeftPane.css'

const LeftPane = () => {
    return ( 
        <div className="left">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Rubik&display=swap" rel="stylesheet"/>
            <div className='left-item'><div className='bullet'/><span>Personal</span></div>
            <div className='left-item'><div className='bullet'/><span>Work</span></div>
            <div className='left-item'><div className='bullet'/><span>Sports</span></div>
            <div className='left-item'><div className='bullet'/><span>Others</span></div>
        </div>
     );
}
 
export default LeftPane;