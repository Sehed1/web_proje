import React, { use } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {

  const [category, setCategory] = React.useState("All")
  return (
    <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    </div>
  )
}

export default Home
