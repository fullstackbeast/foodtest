
export default function FoodCard({ food }) {

    const maxDescriptionLength = 100;


    return (
        <div className="w-full max-w-xs shadow-md h-100 rounded-tr-3xl rounded-bl-3xl overflow-hidden grid grid-rows-2 font-poppins">
            <div className="overflow-hidden rounded-bl-2xl object-cover">
                <img src={food.strMealThumb} alt={food.title} />
            </div>
            <div className="grid text-gray-700 text-lg mt-3">
                <div className="grid grid-rows-2 px-3">
                    <div className="grid grid-cols-firstBig font-bold">
                        <h3 className="capitalize">{food.title}</h3>
                        <span>{food.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Served with french fries + drink</p>
                </div>
                <div className="px-3 mt-2">
                    <p className="text-sm text-gray-500 leading-5">
                        {food.description.length > maxDescriptionLength ? `${food.description.slice(0, maxDescriptionLength)}....` : food.description}
                    </p>
                </div>

                <div className="grid grid-cols-4 mt-3">
                    <div className="col-span-3 pl-6 grid grid-flow-col place-items-center mr-32">
                        {
                            [1, 2, 3, 4, 5].map(num => {
                                return (
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill={food.ratings < num ? "#c2c2c2" : "#fa9e0d"}>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                )
                            })
                        }
                    </div>
                    <div className="bg-yellow-500 rounded-tl-2xl grid place-items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 " fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                </div>


            </div>
        </div>
    )
}
