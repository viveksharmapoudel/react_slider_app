import React, {useState,useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from "./data";

function App(){
  const [reviewIndex, setReviewIndex]= useState(0)

  useEffect(()=>{
    let slider= setInterval(()=>{
      (reviewIndex===data.length-1)?
      setReviewIndex(0):
      setReviewIndex(reviewIndex+1)
    },3000)
    return(
      () => clearInterval(slider)
    )
  },[reviewIndex])
  return(
    <main>
      <section className="section">
        <div className="title">
          <h2><span>/</span>Reviews</h2>
        </div>
        <div className="section-center">
          {
            data.map((person,pIndex) =>{
              const {id, image, name, title, quote }=person
              let position="nextSlide"
              if(pIndex=== reviewIndex){
                position="activeSlide"
              }
              if(pIndex=== reviewIndex-1 || (reviewIndex===0)&&
              (pIndex=== data.length-1)){
                position="lastSlide"
              }
              return(
                <article className={position}>
                    <img src={image} className="person-img"/>
                    <h4>{name}</h4>
                    <div className="title">{title}</div>
                    <p className="text">{quote}</p>
                </article>
              )
            })
          }
          <button 
            className="prev"
            onClick={()=>{
              (reviewIndex===0)?
              setReviewIndex(data.length-1):
              setReviewIndex(reviewIndex-1)
            }}
          >
            <FiChevronLeft/>
          </button>
          <button 
            className="next"
            onClick={()=>{
              (reviewIndex=== data.length-1)?
              setReviewIndex(0):
              setReviewIndex(reviewIndex+1)
            }}
          >
            <FiChevronRight/>
          </button>
   
        </div>
      </section>
    </main>
  )
}

export default App;