import { Link } from 'react-router-dom'
import './footer.css'


export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div id="footer-div" >
                    <div className="row">
                        <div className="col-sm-2 py-4 offset-3 offset-sm-0 col-6">
                            <h1 className='display-5'>Carpals</h1>
                            <h5>Share Your Ride...!</h5>
                        </div>

                        <div className="col-7 offset-1 col-sm-4">
                            <h5>About Us</h5>
                            <p>Carpools can help you to find your favourite group to share your ride.a bett utilisation of your vehicle, money and time </p>

                        </div>
                        <div className="col-4 col-sm-2 offset-sm-1 border-start border-light ps-5 ">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link className='nav-link text-light' to="/">Home</Link></li>
                                <li><Link className='nav-link text-light' to="/about">About</Link></li>
                                <li><Link className='nav-link text-light' to="/">Help</Link></li>
                                <li><Link className='nav-link text-light' to="/">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-2 my-auto">
                            <div className="text-center">
                                <a href="http://google.com/+" className="btn me-3 btn-social-icon btn-google"><i className="fa fa-google-plus "></i></a>
                                <a href="http://www.facebook.com/profile.php?id=" className="me-3 btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
                                <a href="http://www.linkedin.com/in/" className="btn me-3 btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="http://twitter.com/" className="btn me-3 btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
                                <a href="http://youtube.com/" className="btn me-3 btn-social-icon btn-google"><i className="fa fa-youtube"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center text-dark">
                        © Copyright 2022 Carpals
                    </div>
                </div>
            </footer>

        </div>
    )
}
