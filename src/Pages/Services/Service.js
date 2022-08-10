import React from "react";

const Service = ({ service }) => {
	const { _id, img, name, AvailableQuantity, MinQuantity, price, des } =
		service;

	return (
		<div class="card  w-96  shadow-xl hover:shadow-lg hover:bg-yellow-200">
			<figure>
				<img  src={img} alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					{name}
					<div class="badge badge-secondary">Available</div>
				</h2>
				<h2 class="card-title">
					Price : ${price}
				</h2>
				<p>{des}</p>
				<div class="card-actions justify-center">
					<div class="badge badge-outline">Quantity :{AvailableQuantity}</div>
					<div class="badge badge-outline">Products</div>
				</div>
                
			</div>
            <div className="w-25 mx-auto"> 
            <button className="btn  btn-outline btn-warning m-3 ">Buy Now</button>
            </div>
		</div>
	);
};

export default Service;
