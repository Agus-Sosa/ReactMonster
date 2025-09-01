import React from 'react'
import NewCard from './NewCard'
import noticias from './informacionNot'

const News = () => {
  return (
    <div>
      <header>
        <h3>Ultimas noticias</h3>
        {/* <p>Ver mas noticias <span style="color: red;">&rarr;</span></p> */}
      </header>
      <div>
        {noticias.map((inf)=>(
          <NewCard key={inf.id} inf={inf}/>
        ))}
        {/* <NewCard/> */}
      </div>
    </div>
  )
}

export default News