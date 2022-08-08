import {useContext, useEffect, useState} from 'react'
import {useParams, Link, } from 'react-router-dom'
import {GrLinkPrevious} from 'react-icons/gr';
import Download from './Download';
import LazyLoad from 'react-lazyload';
import MainContext from '../MainContext';
import Brand from './Brand';


function Collection(props) {
	const {slugs} = useParams()
	
	const {setSelectedBrands, selectedBrands, setSearch, brands} = useContext(MainContext)

	const clearSelectedBrands = () => {
		setSelectedBrands([])
		setSearch('')
	
	}

	useEffect(() => {
		setSelectedBrands(slugs.split(','))
	}, [])

	return (
		<main className="content">
			<header className="header">

				<Link to="/" onClick={clearSelectedBrands}>
					<a className="back-btn">
						<GrLinkPrevious />
						All Brands
					</a>
				</Link>

				{selectedBrands.length !== 0 && <Download  />}
			</header>
			<section className="brands">
				{selectedBrands.map(slug => {
					let brand = brands.find(brand => brand.slug === slug)
					return (
						<LazyLoad key={brand.slug} once={true} overflow={true} >
							<Brand brand={brand}/>
						</LazyLoad>
					)
				})}
			</section>
		</main>
	)
}

export default Collection