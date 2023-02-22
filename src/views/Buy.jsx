import './Buy.css'

import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'

function Buy() {

    const location = useLocation()
    const navigate = useNavigate()

    const item = useSelector((state => {return state.chosenTicket}))


    function handleBuyClick() {
        navigate('/tickets')
    }

  return (
    <div className="view view-buy">
      <h1>You are about to score some tickets to</h1>
      <article className='buy__info'>
        <section>
            <h2>{item.name}</h2>
            <p className='buy__info__date'>{ item.date.day } { item.date.month } kl {item.starts} - {item.ends}</p>
            <p className='buy__info__venue'>@ {item.venue}</p>
        </section>
        <p className='buy__info__price'>{item.priceSEK} sek</p>
        <button onClick={handleBuyClick} className='buy__btn'>Beställ</button>
      </article>
    </div>
  )
}

export default Buy