import React,{useEffect,useState} from "react";
// import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
const Home = (props) => {

  const [foodCat,setFoodcat]=useState([])
  const [foodItem,setFoodItem]=useState([])
  const [search,setSearch]=useState([]);

  const loadData =async()=>{
    let response =await fetch("https://steadofoods.onrender.com/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
  })
  response =await response.json();
  // console.log(response[0],response[1])
  setFoodItem(response[0])
  setFoodcat(response[1])
}

useEffect(()=>{
  loadData()
},[])
  return (
    <div>
        <div>
            <Navbar />
        </div>
        
      <div>
              <div>
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  style={{ objectFit: "contain !important" }}
                >
                <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                      <div className="d-flex justify-content-center">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          value={search}
                          onChange={(e)=>{setSearch(e.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="carousel-item active">
                      <img
                        src="https://source.unsplash.com/random/900×700/?fruit"
                        className="d-block w-100 maxheightimg"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://source.unsplash.com/random/900×700/?food"
                        className="d-block w-100 maxheightimg"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://source.unsplash.com/random/900×700/?pizza"
                        className="d-block w-100 maxheightimg"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
      </div>

      
        <div className="container">
          {
                foodCat!==[] ? foodCat.map((data)=>{
                return (
                  <div className="row mb-3">  
                    <div key={data._id} className="fs-3 m-3" style={{"fontFamily": "monospace",
  "fontWeight": "bold"}}>
                        {data.CategoryName}
                    </div>
                    <hr/>
                    {
                        //(typeof search === 'string') && (item.CategoryName===data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))
                        foodItem!==[]? foodItem.filter((item)=>(item.CategoryName===data.CategoryName)&&(item.name.toLowerCase().includes(search)))
                        .map(filterItems=>{
                          return (
                            <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                              <Card foodItem={filterItems} options={filterItems.options[0]}></Card>
                            </div>
                          )
                      }):<div>No Such Data Found</div>
                    }
                  </div>
                )
                
                })
                :""
          }
        </div>
      
        <div>
            <Footer />
        </div>
      
    </div>
  );
};

Home.propTypes = {};

export default Home;
