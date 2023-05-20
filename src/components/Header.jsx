import taygi from './images/tyagi.png';
import './style.css';



export default function Header () {
    return (
        <div className='header'>
          <img class="background-image" src={taygi}/>
          <div class="text-overlay">
             <h1>SneakerMate</h1>
          </div>
          <div class="text2-overlay">
             <h3>aka Бархатные тяги</h3>
          </div>
        </div>   
    )
}
