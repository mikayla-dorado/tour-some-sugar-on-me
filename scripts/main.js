import { Bands } from "./bands.js"
import { Venues } from "./Venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar on Me</h1>

<article class="allbookings">
<article class="title">
    <h2>Bookings</h2>
</article>

<article class="bookings">
    ${Bookings()}
</article>
</article>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    
    <section class="detail--column list details__products">
        <h2>Bands</h2>
            ${Bands()}
        </section>
</article>
`

mainContainer.innerHTML = applicationHTML




// You have been hired by Samantha Ducarte, a tour promoter, to build a website that 
// allows her to see the venues that she manages, a list of all bands that will be performing 
// for the next 6 months, and a list of all bookings.


// Analytical Thinking: Understand requirements and data before development
// Communication: Ask questions to clarify any vague or conflicting requirements
// CSS: Using Flexbox to position elements on the web page
// Events: Implementing event listeners to respond to the user clicking on DOM elements
// Data: Understanding data relationship, and using for..of loops to find related data in a database