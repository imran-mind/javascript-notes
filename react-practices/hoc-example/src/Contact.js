import React from 'react';

/* 
address,time,,header,main
footer,section,article,summary,details,strong,em,figcaption,figure,
*/
const Contact = (props) =>{
    return(<div>
        <h2>Contact page</h2>
        <address>Johri colony Hamidpura Burhanpur</address>
        <time>04 am</time>
        <section>hello section</section>
        <details>
            open
            <summary>
                summary
            </summary>
        </details>
        <em>em tag</em>
        <figcaption>figcaption</figcaption>
        <figure>hello figure</figure>
        <iframe src="https://google.com">Google </iframe>
    </div>)
}

export default Contact;