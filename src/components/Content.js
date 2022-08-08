import React, { useState ,useContext} from 'react'
import Brand from './Brand'
import Search from './search'

import MainContext from '../MainContext'
import Download from './Download'

export default function Content() {
  



  const {brands ,selectedBrands} = useContext(MainContext)

  
    return (
    <div className='content flex-1 overflow-auto' >
        
        <div className='header  h-20 p-2 border-b border-black  flex sticky top-0  bg-white   '>
    
      
    
            <Search />
  {selectedBrands.length !== 0 && <Download/>}
        </div>
        
                <section className=     ' brands  p-4 bg-gray-50'>

                {brands.map(brand => (

<Brand brand={brand} />

)
)}
                </section>


        </div>
  )
}
