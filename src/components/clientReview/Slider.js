import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import quotes from "./images/quotes.png"
import person1 from "./images/person1.jpg"
import person2 from "./images/person2.jpg"
import person3 from "./images/person3.png"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider className="slider-r"  {...settings}>
        <div  >
          <div className="comment-box-r">
            <div className="quotes-r"><img className="personim-r" src={quotes} alt="quotes" /></div>
            <div className="comment-r"> I  have used the services of your company on a few occasions and sell and buy many houses and from this place .i know if any house i have to sale or purchase this is the right place foe me  Highly recommend to every one</div>
          </div>
          <div className="person-area-r">
            <img className="photo-r" src={person1} alt="person1" />
            <cite className="adress-r">
              <span className="name-r">Khushal Das</span>
              <span className="rank-r">IT Officers</span>
              {/* <a className="link" rel="noopener noreferrer" target="_blank" href="https://thememove.com/">https://thememove.com</a> */}
            </cite>
          </div>
        </div>

        <div>
          <div className="comment-box-r">
            <div className="quotes-r">
              <img src={quotes} alt="quotes" />
            </div>
            <div className="comment-r">i'm from  Hyderabad. i have purchase an flat few days ago it was 100% correct as mentioned in the detail . I am satisfy and recommend other to use your service.</div>
          </div>
          <div className="person-area-r">
            <img className="photo-r" src={person2} alt="person1" />
            <cite className="adress-r">
              <span className="name-r">MSilpa Dey</span>
              <span className="rank-r">Lab technicians</span>
              {/* <a className="link" rel="noopener noreferrer" target="_blank" href="http://aig.com">http://aig.com</a> */}
            </cite>
          </div>

        </div>

        <div>
          <div className="comment-box-r">
            <div className="quotes-r"><img src={quotes} alt="quotes" /></div>
            <div className="comment-r">I’m very pleased to tell everyone about this website its amazing i can sell and purchase property within days here this is very good plateform for me love to come here again and again</div>
          </div>
          <div className="person-area-r">
            <img className="photo-r" src={person3} alt="person3" />
            <cite className="adress-r">
              <span className="name-r">Anirban Sikdar</span>
              <span className="rank-r">Sales Manager</span>
              {/* <a className="link" rel="noopener noreferrer" target="_blank" href="https://woocommerce.com/">https://woocommerce.com/</a> */}
            </cite>
          </div>
           
        </div>


      </Slider>
    );
  }
}