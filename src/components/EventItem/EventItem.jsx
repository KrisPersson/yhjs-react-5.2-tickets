import "./EventItem.css"

import { chooseTicket } from "../../actions/ticketAction"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'


function EventItem({item, eventCalendar}) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick(event) {
        const target = event.currentTarget.getAttribute('id')
        const selectedItemObject = eventCalendar.filter(item => item.name === target)[0]

        if (selectedItemObject !== undefined) {
            dispatch(chooseTicket(selectedItemObject))
            navigate('/buy')
        }
    }


    return (
        <li onClick={ (event) => handleClick(event) } className="event-item" id={item.name}>
            <section className="event-item__date-square">
                <p className="date-square__day">{item.date.day}</p>
                <p className="date-square__month">{item.date.month}</p>
            </section>
            <section className="event-item__info">
                <h3>{item.name}</h3>
                <p className="info__venue">{item.venue}</p>
                <p className="info__start-time">{item.starts} - <span className="info__end-time">{item.ends}</span></p>
                <p className="info__price">{item.priceSEK} SEK</p>
            </section>
        </li>
    )
}

export default EventItem