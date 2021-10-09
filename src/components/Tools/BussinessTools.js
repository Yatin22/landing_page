import React from 'react'
import Tools from './Tools'
import order from '../../images/homepage/order.png'
import seo from '../../images/homepage/seo.png'
import call from '../../images/homepage/call.png'
import delivery from '../../images/homepage/delivery.png'
import list from '../../images/homepage/list.png'
import online from '../../images/homepage/online.png'
function BussinessTools() {
    return (
        <>
       
           <Tools
           image={order}
                        heading="Simple Order Management"
                        para="Manage all your orders at one place only and keep track of each of them."
                    />
                    <Tools
                        image={seo}
                        heading="SEO Ready"
                        para="Every store is SEO-friendly and doesn't require any coding or developer."
                    />
                    <Tools
                        image={call}
                        heading="Customer call support"
                        para="With our 24x7 customer support, we never miss a chance to hear your queries."
                    />
                    <Tools
                        image={delivery}
                        heading="Deliver Charges"
                        para="Charge a flat ,free or dynamic delivery fee on orders amount." />
                    <Tools
                        image={list}
                        heading="Customer List"
                        para="With your huge customer list,showcase your customer base to the growing world."
                    />
                    <Tools
                        image={online}
                        heading="Online Payments"
                        para="Accept payments via debit/credit card, UPI, wallet, etc. through online payment."
                    />
                
        </>
    )
}

export default BussinessTools
