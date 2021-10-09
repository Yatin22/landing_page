import React from 'react'
import Store from './Store'
import createyourstore from '../../images/homepage/createyourstore.png'
function EStore() {
    return (
        <div>
            <Store
                    title="Create Your E-store"
                    image={createyourstore}
                    heading_one="Fill Out the Contact Us Form."
                    heading_two="Contact with Customer executive."
                    heading_three="Get your E-store within 24hrs."
                    para_one="Please fill out the contact us form for your E-Store."
                    para_two="Our customer executive will reach out to you for a demo."
                    para_three="Once you confirm us you will get your estore within 24hrs."
                    service_name="Create Your own E-Store Now"
                />
        </div>
    )
}

export default EStore
