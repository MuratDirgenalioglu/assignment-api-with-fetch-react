import React from 'react'


function Suppliers({loading, setLoading, suppliers, loadData}) {
    
    const deleteSupplier = (id) => {
        setLoading(true)
        fetch('https://northwind.vercel.app/api/suppliers/' + id, { method: 'DELETE' })
            .then(res => {
                if (res.ok === true) {
                    loadData()
                }
            })
    }

    return (<>
        {
            loading ? <h1>LOADING... </h1> :
                <table className='w3-table-all w3-hoverable w3-card-4'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>Country</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map(supplier =>
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.companyName}</td>
                                <td>{supplier.contactName}</td>
                                <td>{supplier.address?.country}</td>
                                <td><button style={{ cursor: 'pointer'}} onClick={() => deleteSupplier(supplier.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        }
    </>
    )
}
export default Suppliers