import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Orders from './components/Orders'

export default function Acount() {
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">My Account</h3>
                    </div>
                </div>
                <div className="row">

                    <SideBar />

                </div>
            </div>
        </section>
    )
}
