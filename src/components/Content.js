import React, { useState ,useContext} from 'react'
import Brand from './Brand'
import Search from './search'
import {List,AutoSizer} from 'react-virtualized';
import MainContext from '../MainContext'
import Download from './Download'
import LazyLoad from 'react-lazyload'
import Loader from './Loader'

export default function Content() {
  


	const {brands, selectedBrands} = useContext(MainContext)

	const rowRenderer = ({ key, index, style, isScrolling, isVisible }) => {
		// const content = isScrolling ? <Loader /> : <Brand brand={brands[index]}  />;
		return (
			<div style={style} key={key}>
				<Brand brand={brands[index]}  />
			</div>
		)
	}


  
    return (
      <main className="content">
			<header className="header">
				<Search/>
				{selectedBrands.length !== 0 && <Download/>}
			</header>
			<section className="brands">
				<AutoSizer>
					{({height, width}) => (
						<List
							width={width}
							height={height}
							rowCount={brands.length}
							rowHeight={113}
							rowRenderer={rowRenderer}
						/>
					)}
				</AutoSizer>
			</section>
		</main>
  )
}
