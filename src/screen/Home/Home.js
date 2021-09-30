import React from 'react';
import {Link, Switch, Route} from "react-router-dom";
import './Home.css';
import Service from "../Service/Service";
import ima from '../../img/image-1.jpg'
import dichvu from '../../img/dichvu.jpg'
import dog from '../../img/icons8-dog-60.png'
import cat from '../../img/icons8-black-cat-60.png'
import foot from '../../img/icons8-cat-footprint-100.png'
import Icon from '../../component/Icon/iconDog';
import Cut from '../../img/chai-long.png';
import Nhannuoi from '../../img/nhan-nuoi.png';
import Tiem from '../../img/tiem.png';
import Huanluyen from '../../img/huan-luyen.png';

const Home = () => {
    return(
        <>
          <img src={ima} alt="img" className="img-home"></img>

          <section className="sec1">
           <div className="title">
            <Icon/>
            <h2>Chào mừng bạn đến với Pets Shop - Thế Giới Thú Cưng</h2>
            <div className="view-service">
              <img src={dichvu} alt="dich-vu" className="dich-vu"></img>
              <nav>
               <Link to= "/Service" exact className="link-service" >Xem các dịch vụ của Pets Shop</Link>  </nav>
               <Switch>
                 <Route path= "/Service" exact>
                   <Service></Service>
                 </Route>
               </Switch>
            </div>
           </div>
          </section>

          <section className="sec2">
            <div className="cart">
              <img src={dog} alt="icon" className="icon"></img>
              <div>
                <h3>Chữa bệnh cho thú cưng</h3>
                <h5>Dịch vụ thú y nhanh chóng</h5>
              </div>
            </div>
            <div className="cart">
              <img src={foot} alt="icon" className="icon"></img>
              <div>
                <h3>Chăm sóc cho thú cưng</h3>
                <h5>Nhận nuôi và cung cấp chỗ ở cho thú cưng</h5>
              </div>
            </div>
            <div className="cart">
              <img src={cat} alt="icon" className="icon"></img>
              <div>
                <h3>Bán sản phẩm dành cho thú cưng</h3>
                <h5>Phụ kiện dành cho thú cưng siêu dễ thương</h5>
              </div>
            </div>
          </section>
          
          <section className="sec3">
          <Icon/>
          <h2>Các dịch vụ của Pets Shop</h2>
          <div className="section-service">
            <Link className="cart-2">
            <img src={Cut} alt="icon" className="icon"></img>
              <div>
                <h3>Chải lông cho thú cưng</h3>
                <p>Spa và Massage trong lúc tắm, giúp thú thú cưng thư giãn. Sấy kết hợp chải chải lông để loại bỏ lớp lông thừa bám trên thú cưng. Chải lông tạo kiểu theo yêu cầu. </p>
              </div>
            </Link>
            <Link className="cart-2">
            <img src={Nhannuoi} alt="icon" className="icon"></img>
              <div>
                <h3>Nhận nuôi thú cưng</h3>
                <p>Pets Shop hỗ trợ kết nối người cho và người nhận. Pets Shop có thể yêu càu bạn một ít kinh phí nếu lưu lại chó mèo tại Pets Shop để chờ người nhận nuôi. Kinh phí này dùng chi phí thức ăn cho những ngày đầu tiên tiếp nhận. </p>
              </div>
            </Link>
            <Link className="cart-2">
            <img src={Huanluyen} alt="icon" className="icon"></img>
              <div>
                <h3>Huấn luyện cho thú cưng</h3>
                <p>Dạy chó ngừng sủa khi gặp người lạ, dạy thú cưng đi vệ sinh đúng cách,...</p>
              </div>
            </Link>
            <Link className="cart-2">
            <img src={Tiem} alt="icon" className="icon"></img>
              <div>
                <h3>Tiêm ngừa cho thú cưng</h3>
                <p>Tiêm ngừa là cách tốt nhất để thú cưng của bạn chôngs được bệnh nguy hiểm, bệnh truyền nhiễm. Từ đó đó tránh dược thiệt hại về kinh tế của bạn cũng cũngnhuw tính mạng của thú cưng</p>
              </div>
            </Link>
          </div>
          </section>
        </>
        
    );
}

export default Home;

