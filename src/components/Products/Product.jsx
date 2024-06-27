/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProduct = async () => {
            setLoading();
            const response = await fetch(`https://fakestoreapi.cpm/products/${id}`);
            setProduct(await response.json())
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                
            </>
        )
    }


  return (
    <div className="container">
      <div className="row">
        {
            loading && loading ? <Loading/> : <ShowProduct/>
        }
      </div>
    </div>
  )
}

export default Product
