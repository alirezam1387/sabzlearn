import { Suspense, useEffect, useState } from "react"

// components
import Courses from "../Components/Courses/Courses"
import Header from "../Components/Header/Header"
import Landing from "../Components/Landing/Landing"
import Slider from "../Components/Slider/Slider"
import Way from "../Components/Way/Way"
import Abilities from "../Components/Abilities/Abilities"
import Articles from "../Components/Articles/Articles"
import Footer from "../Components/Footer/Footer"
import Loader from "../Components/Loader/Loader"


function Index() {

  return (
      <div className="overflow-hidden">
        <Header />
        <div className="container-md container-fluid">
          
          <Landing />
          <Courses />
          <Way />
          <Slider title="پرطرفدار ترین دوره ها" subtitle="دوره های محبوب و پروژه محور سبزلرن" color="#22C55E" />
          <Abilities />
          <Slider title="جدیدترین دوره ها" subtitle="یادگیری و رشد توسعه فردی" color="#FBBF24" />
          <Articles />
        </div>
        <Footer />
      </div>
  )
}

export default Index
