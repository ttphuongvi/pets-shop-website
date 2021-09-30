import React from 'react';
import {Link, Switch, Route} from "react-router-dom";
import './Home.css';
import Service from "../Service/Service";
import ima from '../../img/image-1.jpg'
import svg from '../../img/dog-paw.svg'
import dichvu from '../../img/dichvu.jpg'

const Home = () => {
    return(
        <>
          <img src={ima} alt="img" className="img-home"></img>
          <section>
           <div className="title">
            <div className="title-icon">
              <img src={svg} alt="feet-dog" className="feet-dog"></img>
            </div>
            <h2>Chào mừng bạn đến với Pets Shop - Thế Giới Thú Cưng</h2>
            <div className="view-service">
              <img src={dichvu} alt="dich-vu" className="dich-vu"></img>
              <nav>
               <Link to= "/Service" exact className="link-service" >Xem các dịch vụ</Link>  </nav>
               <Switch>
                 <Route path= "/Service" exact>
                   <Service></Service>
                 </Route>
               </Switch>
            </div>
           </div>
          </section>
        </>
        
    );
}

export default Home;

