import './Nav.sass'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="Navigation">
          <ul className='Navigation-ul'>
            <li className='Navigation-li'><Link to={`/`}>Home</Link></li>
            <li className='Navigation-li'><Link to={`/orders`}>Orders</Link></li>
            <li className='Navigation-li'><Link to={`/admin`}>Admin</Link></li>
          </ul>
    </div>
    </>
  )

}



export default Nav