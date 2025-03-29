import React from 'react';
import { Link } from 'react-router-dom';

const CardData = ({data}) => {
    const { product_title,price,product_id, product_image}=data


    return (
        <div>
            <div className="card bg-base-300 shadow-xl h-full ">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl w-[282px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
    <p>price: {price}k</p>
    <div className="card-actions">
<Link to={`./cardDetiles/${product_id}`}>
<button  class="btn btn-outline btn-primary rounded-2xl ">View Details</button>
</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardData;