import { useGetAllCategoriesQuery, useCreateCategoryMutation} from "./store/service/categoryService";

function App() {

// const {data, isError, isLoading} = useGetAllCategoriesQuery ()

const [data] = useCreateCategoryMutation()
const handleClick=()=>{
data({
  name:"tacos"
})
}
  return <h1 className="text-3xl font-bold underline" onClick={handleClick}>Hola compañeros</h1>
}

export default App;