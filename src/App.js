
import './App.scss';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import BrandsData from './brand.json';
import { useEffect, useState } from 'react';
import Copied from './components/Copied';
import { Route, Router, Routes } from 'react-router-dom';
import Collection from './components/Collection';


function App() {

  
	let brandsArray = []
	Object.keys(BrandsData).map(key => {
		brandsArray.push(BrandsData[key])
	})

	const [brands, setBrands] = useState(brandsArray)
	const [selectedBrands, setSelectedBrands] = useState([])
	const [copied, setCopied] = useState(false)
	const [search, setSearch] = useState('')



	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false)
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [copied])

	useEffect(() => {
		document.title = 'React BrandColors Demo | PROTOTURK'
	}, [])

	useEffect(() => {
		setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
	}, [search])


  const data = {
    brands,
		selectedBrands,
		setSelectedBrands,
		setCopied,
		search,
		setSearch
  }


  return (
   
   
   
   <div className="flex-1 flex">

<MainContext.Provider value={data}>
				{copied && <Copied color={copied}/>}
				<Sidebar />
				<Routes>
				
						<Route path="/" element={<Content />}/>
					
			
						<Route path="/collection/:slugs" element={<Collection />} />
						
				
					
				</Routes>
			</MainContext.Provider>
    </div>
  );
}

export default App;
