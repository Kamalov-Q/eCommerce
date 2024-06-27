/* eslint-disable no-unused-vars */
import Products from '../Products/Products';
import './Home.css'
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          src="src\assets\bg.png"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
             CHECK OUT ALL TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
