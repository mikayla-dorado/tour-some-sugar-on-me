import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()


//TODO: What is the purpose of this function??
//? Answer: with this function we are cmaring the id on the band array to the bandId on the bookings array
const findBand = (booking, allBands) => {
    let bookingBand = ""
    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }
    return bookingBand
}

const findVenue = (a, b) => {
    let bookingVenue = ""
    for (const venue of b) {
        if (venue.id === a.venueId) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}



//TODO: Why is line 41 and 42 singular band and venue?
//? Answer: in our findVenue function that we called, we only loop through one venue at a time, same for band

export const Bookings = () => {
    let html = ""
    html += "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues) //booking needs to be singular here!!!
        const band = findBand(booking, bands)
        html += `<li data-type="booking" data-id="${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}</li>` //TODO: incorporate {booking.date}
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const bookingId = itemClicked.dataset.id

        if (itemClicked.dataset.type === "booking") {
            
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)) {
                    //let findingVenue = findVenue(booking,venues)
                    let findingBand = findBand(booking,bands)
                    window.alert(`${findingBand.name}\n ${findingBand.genre}\n${findingBand.members} band members\n Formed in ${findingBand.founded} `)
                    // Rocket Pumpkins \n
                    // EDM
                    // Formed in 2005
                    // 3 band members
                }
            }


        }
    }
)


                //OBJECT
//make a window alert for bookings
//the window alert shuld display all information for each band when clicked