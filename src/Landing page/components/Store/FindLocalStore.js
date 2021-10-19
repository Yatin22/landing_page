import React from 'react'
import Store from './Store'
import findyourlocalstore from '../../images/homepage/findyourlocalstore.png'
function FindLocalStore() {
    return (
        <>
            <Store
                title="Find Your Local Store"
                image={findyourlocalstore}
                heading_one="Search For Your Local Store."
                heading_two="Add Products In Your Cart."
                heading_three="Pay Via Various Modes Of Payment."
                para_one="Subscribe to your favourite local store."
                para_two="Add products in store specific cart."
                para_three="Pay securely online and stay Safe."
                service_name="Find a Store"
            />
        </>
    )
}

export default FindLocalStore
