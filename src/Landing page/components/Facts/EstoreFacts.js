import React from 'react'
import Facts from './Facts'
import multiple_estore from '../../images/homepage/multiple_estore.png'
import fact2 from '../../images/homepage/fact2.png'
import atbharat from '../../images/homepage/atbharat.png'
function EstoreFacts() {
    return (
        <>
            <Facts
            image={multiple_estore}
                            heading="Multiple E-Store"
                            para="With multiple stores trusting us and have created their stores online."
                        />
                        <Facts
                            image={fact2}
                            heading="Vocal For Local"
                            para="We believe in Vocal For Local providing the best customer support to your needs."
                        />
                        <Facts
                            image={atbharat}
                            heading="Atma Nirbhar Bharat"
                            para="We nurture rural entrepreneurs who inturn create there business online. The real #AatmaNirbharta."
                        />
        </>
    )
}

export default EstoreFacts
