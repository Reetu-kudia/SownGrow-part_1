
import ReactPlayer from 'react-player';
import './Video.css';
import EFooter from '../Ecommerce/EFooter';
import TAVnav from './TAVnav';

const Video = () => {

  return (
    <div className="Video">
      <TAVnav />
      <h3>Watch informative videos about planting and wet waste recycling.</h3>
      <h4>Planting</h4>
      <div className="video-container">
        
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uSOOO3KBKDY"
            controls
            className="ReactPlayer1"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7u15Izxc148"
            controls
            className="ReactPlayer1"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9nQ6d3A2cTs"
            controls
            className="ReactPlayer1"
          />
       
      
      </div>

      <h4>Waste recycling</h4>
      <div className="video-container">
      
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-gTddIWx_O0"
            controls
            className="ReactPlayer2"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=X_xf25QWry4"
            controls
            className="ReactPlayer2"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=o3CKCYzUPzw"
            controls
            className="ReactPlayer2"
          />
      </div>

      <h4>Discover the environmental legacies and inspiring activism.</h4>
      <div className="video-container">
      
          <ReactPlayer
            url="https://www.youtube.com/watch?v=w8OtZUcjKFU"
            controls
            className="ReactPlayer2"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=YEqTo8lDivs"
            controls
            className="ReactPlayer2"
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Lk9fpESv3Iw"
            controls
            className="ReactPlayer2"
          />
      </div>
      <div className='Vfooter'>
      <EFooter />
      </div>
    </div>
  );
};

export default Video;
