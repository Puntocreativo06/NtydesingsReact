/* eslint-disable react/jsx-key */
import { useState, useEffect} from 'react'
import './styles.css'
import NavBar from '../../componentes/Navbar'
//import Counter from './componentes/Counter'
import Card from '../../componentes/products/card';
import Details from '../../componentes/products/Details';


function Home() {

  //const [counterValue,setCounterValue] = useState (0);
  const [search,setSearch]=useState('');
  const [active,setActive]=useState(false);
  const [products,setProducts] = useState ([]);
  const [showDetails,setShowDetails] = useState(false);
  const [productDetail,setProductDetail] = useState(null);
  const [productFiltered, setProductFiltered] = useState([]);

  const filterBySearch = (query) =>{
    let updateProductList = [...products];

    updateProductList = updateProductList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
    })

    setProductFiltered (updateProductList);

  }
  const onChange = (event) =>{
    const value= event.target.value;
    setSearch(value);
    filterBySearch(value);
  }

  const onFocus = () =>{
    setActive(true);
  }
  
  const onBlur = () =>{
    setActive(true);
  }

  const onShowDetails = (id) => {
    setShowDetails (true);
    const findProduct = products.find((product) => product.id === id);
    setProductDetail(findProduct);
  }
  
  /*/
  const isValidCounter = counterValue > 0; 
  const IncrementCounter = () => {
    setCounterValue((prevCounter)=> prevCounter + 1);
    }
  const DecrementCounter = () => {
    if (!isValidCounter) return; 
    setCounterValue((prevCounter)=> prevCounter - 1);
  }

        //<Counter counterValue={counterValue} isValidCounter={isValidCounter} onDecrementCounter={DecrementCounter} onIncrementCounter={IncrementCounter} />
  /*/

  useEffect (() => {
    const getProducts = async () => {
      try {
        const response = await fetch ('https://6499988e79fbe9bcf83f9368.mockapi.io/products', {
          method: 'GET',
          headers:{
            'Content-Type':'application/json'
          },
        });
        
        const data = await response.json();
        setProducts(data);

      } catch (error) {
      console.error (error);  
      }
    }
    getProducts();
  }, [])

console.log({products});

    return (    
    <div>
      <NavBar logo="img"/>
      <div className='contentContainer'>
        {showDetails ? (
          <>
          <div>
            <button onClick={()=>setShowDetails(false)} className='btn btn-primary m-2'> Regresar </button>
          <h2 className='m-2'>Detalle de producto </h2>
          </div>
          
          <Details {...productDetail}/>
          </>
        ) : (
          <>
          <div className='inputContainer'>
            <input className='m-2'
              placeholder='Buscador'
              id='task'
              required={true}
              name='Search'
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              // eslint-disable-next-line react/no-unknown-property
              active={active}
              
             />
           </div>  
            <h2 className='m-2'> Productos </h2>
            <div className="prueba row row-cols-1 row-cols-md-4">
                  {
                  search.length > 0 ? (
                    productFiltered.map((products)=>(
                      <Card{...products} onShowDetails={onShowDetails}/>)
                  )
                  ) : (
                    products.map((products)=>(
                    <Card{...products} onShowDetails={onShowDetails}/>
                    ))
                  )
                  }
            </div>  
            </>
            )
        }
      </div>
      
    </div>
    
    
  )
}

export default Home


