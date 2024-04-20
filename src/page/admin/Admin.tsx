import './Admin.sass'
import Nav from '../../components/nav/Nav'
import AdminTable from '../../components/adminTable/adminTable'

function Admin() {
  return (
    <>
    <section className="admin">
      <div className="container">
          <Nav/>
          <AdminTable></AdminTable>
        </div>
    </section>
    </>
  )

}

export default Admin