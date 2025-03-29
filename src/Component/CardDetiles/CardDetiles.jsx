import { useLoaderData, useParams } from "react-router-dom";

const CardDetiles = () => {
const param= useParams();
const ProductId=parseInt(param.product_id)
const loderData=useLoaderData()
const FindData=loderData.find(data=>data.product_id===ProductId)
const {description,price,product_image,product_title,rating,Specification}=FindData;
console.log(FindData)


    return (
        <div>
            <div className='bg-purple-500 pt-10 py-20 rounded-2xl pb-96 '>
                <h1 className='text-6xl font-bold text-center mb-3'>Product Details</h1>
                <p className='text-center text-2xl md:w-1/2 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
{/* //card */}
          
            <div className="hero  bg-white rounded-2xl w-2/3  mx-auto -mt-72  border-4 border-amber-50 shadow-2xl">
  <div className="hero-content flex-col lg:flex-row ">
    <img
      src={product_image}
      className=" rounded-lg text-start " />
    <div className="flex-3/4">
      <h1 className="text-5xl font-bold ">{product_title}</h1>
      <p className="my-3">price: ${price}</p>
      <h1 className="bg-lime-100 px-3 py-2 rounded-xl w-24 my-2 border border-green-500 text-green-600">In Stock</h1>
      <p>{description}</p>
      <h1>Specification :</h1>
      {
        Specification.map((data,index)=><h1 key={index}>{index + 1}.{data}</h1>)
      }

<div className="flex mt-5 items-center mb-2 gap-2">
<h1 className="font-bold ">Rating</h1>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
</div>
</div>


<div className="flex gap-4 mb-5">
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>

<h1>{rating}</h1>
  </div>



<div className="gap-4 flex items-center">

<button className="btn btn-primary">Add To Card</button>
<div className="rating gap-1">
<input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" aria-label="3 star" />
</div>
</div>
  </div>


 
  </div>

            </div>
        </div>
    );
};

export default CardDetiles;