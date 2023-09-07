import { getBands, getVenues,getBookings } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const Bands = () => {
    let html = ""
    html = "<ul>"

    for (const band of bands) {
        html += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}


//TODO: What is this function for??
//* A: here we are getting the venueId from bookings 
const checkBookings = (id) => {
    const data = []
    for (const booking of bookings) {
        if (booking.bandId === parseInt(id)) { //! parseInt() was necessary even though it had been done before calling the function 
            data.push(booking.venueId) // only had "bandId" instead of booking.bandId
        }
    }
     return data
}


//TODO: What is this function for??
//* A: so here we can get the venue name from the venueId
const checkVenues =(id) => {
    const data = []
    for (const venue of venues) {
        if (venue.id === parseInt(id)) {
            data.push(venue.name)
        }
    }
    return data
} 
//<3

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const bandId = itemClicked.dataset.id
        if (itemClicked.dataset.type === "band") {
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    let checkTheBookings = checkBookings(bandId)
                    let checkTheVenues = checkVenues(checkTheBookings)

                    window.alert(`${band.name} is playing at ${checkTheVenues} `)
                }
            }
        }
    }
)


            //OBJECT
// make a clicker event for bands
//when you click on a band, it should display a window alert
// the window alert should display the name of the venue that band is playing at
//need to iterate through the band and the venues