import React from 'react'
import Navbar  from './widgets/Navbar'
import Data from './widgets/Data'
import List from './widgets/List'

 const Land = () => {
     const dataElements = Data.map(data => {
         return <List
         key={data.id}
         data={data}
         />
        })
        console.log(dataElements)
    
  return (
    <div>
        <Navbar />
        <div className='section'>
            {dataElements}
        </div>
    </div>
  )
}
export default Land;