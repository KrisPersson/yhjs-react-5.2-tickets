import './Buy.css'

import {useLocation, useNavigate} from 'react-router-dom'

function Buy() {

    const location = useLocation()
    const navigate = useNavigate()

    const item = location.state.selectedItemObject

    function handleBuyClick() {

    }

  return (
    <div className="view view-buy">
      <h1>You are about to score some tickets to</h1>
      <article className='buy__info'>
        <section>
            <h2>{item.name}</h2>
            <p className='buy__info__date'>21 mars kl 19.00 - 21.00</p>
            <p className='buy__info__venue'>@ Kjell Härnqvistsalen</p>
        </section>
        <p className='buy__info__price'>350 sek</p>
        <button onClick={handleBuyClick} className='buy__btn'>Beställ</button>
      </article>
    </div>
  )
}

export default Buy