import Carousel from '../../Components/carousel/Carousel'
import Footer from '../../Components/footer/Footer'
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../Components/navbar/Navbar'
import Request from '../RequestPagePassenger/Request';
import DriverForm from '../../Components/DriverCreate/DriverForm'
import './home.css'
import { useEffect,useContext } from 'react';

export default function Home() {
    
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        console.log(user.license)
    },[])
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <div id="secPart">
                <img src="https://media.istockphoto.com/vectors/yellow-taxi-order-or-share-flat-line-illustration-vector-id1141727347?k=6&m=1141727347&s=612x612&w=0&h=1XpV9MIlY79RsUbX92pY3VDYcE5Sf3IAbyzkxoKnvno="
                    alt="" />
                <div>
                    <div id="textSec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem recusandae ipsa
                        ape Lorem ipsum dolor sit amet. t. Accusantium, est?</div>
                    {user.license?<DriverForm/>:<Request/>}
                </div>
            </div>
            <section id="coverpic">
                <div>
                    <h1>Carpool Services!</h1>
                    Carpool helps you to find a ride partner or a ride to reach your destination. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Tempore consequatur, laboriosam assumenda eaque unde quaerat non, odio at
                    natus commodi quibusdam nostrum cum. Minima aut beatae aperiam placeat excepturi accusantium ad esse
                    voluptates architecto a?
                </div>
            </section>
            <section id="basic-info-bar">
                <div id="info1"><i className="fa fa-credit-card-alt" aria-hidden="true"></i>&ensp; <h4>Let's Save money</h4>
                    <br />
                    <span>Choose your ride with lowest prices with Share & Save quality of carplas...! </span>
                </div>
                <div id="info2"><i className="fa fa-female" aria-hidden="true"></i><i className="fa fa-male"
                    aria-hidden="true"></i>&ensp; <h4>Wherever,Whenevr,or Whoever
                    </h4><br />
                    <span>Select your ride with your comfortness... Do as you like !</span>
                </div>
                <div id="info3"><i className="fa fa-id-card-o" aria-hidden="true"></i>&ensp; <h4>Trust who you travel with</h4>
                    <br />
                    <span>Its our resposibily of your security. know your partner first and let us check users identity T&C*
                    </span>
                </div>
            </section>
           
            
            <Footer/>
        </div>
    )
}
