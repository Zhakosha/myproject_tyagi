import taygi from './images/tyagi.png';
import './style.css';



export default function Header () {
    return (
        <div className='header'>
          <img class="background-image" src={taygi}/>
          <div class="text-overlay">
             <h1>Бархатные тяги</h1>
          </div>
        </div>   
    )
}
