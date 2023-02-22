import './Tickets.css'
import { useSelector } from 'react-redux'

function Tickets() {

    const item = useSelector((state => {return state.chosenTicket}))


  return (
    <div className="view view-tickets">
      <h1>Tack för din beställning!</h1>
      <article className='tickets-details'>
        <section className='tickets-details__what'>
            <h4>WHAT</h4>
            <p>{ item.name }</p>
        </section>
        <section className='tickets-details__where'>
            <h4>WHERE</h4>
            <p>{ item.venue }</p>
        </section>
        <section className='tickets-details__when'>
            <article className='when__when'>
                <h4>WHEN</h4>
                <p>{ item.date.day } { item.date.month}</p>
            </article>
            <article className='when__from'>
                <h4>FROM</h4>
                <p>{ item.starts }</p>
            </article>
            <article className='when__to'>
                <h4>TO</h4>
                <p>{ item.ends }</p>
            </article>
        </section>
      </article>
    </div>
  )
}

export default Tickets