import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import './styles/main.css';
import FoodCard from './components/FoodCard';

const queryClient = new QueryClient()



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Foods />
    </QueryClientProvider>
  );
}

function Foods() {

  const fetchFoods = async () => {
    const res = await fetch('https://asm-dev-api.herokuapp.com/api/v1/food');
    return res.json();
  }

  const { isLoading, error, data } = useQuery('foods', fetchFoods);

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className=" w-full grid place-content-center">
      <div className=" max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {data.data.meals.map(food => <FoodCard food={food}/>)}
      </div>
    </div>
  )
}

export default App;
