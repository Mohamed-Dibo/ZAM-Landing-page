import React, { useState } from "react";
import Box from "./Box.jsx"
import boxImage from "../Assets/images/boxImage.png"
import '../Styles/FeaturedApps.scss'
function FeaturedApps() {
    const [cards, setCard] = useState([{
        id:1,
        image:boxImage,
        content:`نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء
        الأمثل الذي يمكنك من رفع مبيعاتك`
    },{
        id:2,
        image:boxImage,
        content:`نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء
        الأمثل الذي يمكنك من رفع مبيعاتك`
    },{
        id:3,
        image:boxImage,
        content:`نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء
        الأمثل الذي يمكنك من رفع مبيعاتك`
    },{
        id:4,
        image:boxImage,
        content:`نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء
        الأمثل الذي يمكنك من رفع مبيعاتك`
    }])
  return (
    <section className="Featured__apps text-center">
      <h2 className="title">
        التطبيقات المميزة
        <span>تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</span>
      </h2>
      <div className="container">
        <div className="row">
         
         {cards.map((card)=>{
             return <Box key={card.id} image={card.image} content={card.content} />
         })}
        </div>
        <a href="#" className="btn__primary bg-transparent mt-5">
          تصفح التطبيقات <i className="far fa-chevron-left ms-1"></i>
        </a>
      </div>
    </section>
  );
}

export default FeaturedApps;
