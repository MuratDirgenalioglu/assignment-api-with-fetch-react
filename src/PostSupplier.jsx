import React, { useState } from 'react'
import "./App.css"

function PostSupplier({ setLoading, loadData }) {
    const [companyName, setCompanyName] = useState("")
    const [contactName, setContactName] = useState("")
    const [country, setCountry] = useState("");

    const addSupplier = () => {
        setLoading(true)
        let newSupplier = {
            companyName: companyName,
            contactName: contactName,
            address: {
                country: country
            }
        }
        console.log(newSupplier)
        fetch('https://northwind.vercel.app/api/suppliers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newSupplier)
        })
            .then(res => {
                if (res.ok === true) {
                    loadData()
                }
            })

        setCompanyName("");
        setContactName("");
        setCountry("");
    }


    return (
        <>
            <div className='form'>
                <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="contactName">Contact Name</label>
                    <input type="text" id='contactName' value={contactName} onChange={(e) => setContactName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" id='country' value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                    <button onClick={addSupplier}>Add Supplier</button>
                </div>
            </div>

        </>
    )
}

export default PostSupplier