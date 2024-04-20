import './User.sass'
import UserTabel from '../../components/userTable/userTable'
import Nav from '../../components/nav/Nav'



function Home() {
  return (
    <>
    <section className="users">
      <div className="container">
        <Nav/>
        <UserTabel></UserTabel>
      </div>
    </section>
    </>
  )
}

export default Home