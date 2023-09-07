import { getVenues, getBands, getBookings} from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


export const Venues = () => {
    let html = ""
    html = "<ul>"

    for (const venue of venues) {
        html += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}


const checkBookings = (id) => {
    const data = []
    for (const booking of bookings) {
        if (booking.venueId === parseInt(id)) { //! parseInt() was necessary even though it had been done before calling the function 
            data.push(booking.bandId) // only had "bandId" instead of booking.bandId
        }
    }
     return data
     
}

//if you only have Venues and Bands data, you won't know where each band is playing; so you need Bookings data


const checkBands = (bandIds) => {
    const info = []
    for (const band of bands) {
        if (bandIds.includes(band.id)) { //.INCLUDES            band.id === parseInt(bandIds)
            info.push(band.name)
        }
    }
    return info
}



//vomment




//When you click on a Venue (venueId),
    //we want program to look at bookings, and tell us which bandId's, are at venueId we clicked on

//TODO: Now that program can get the bandId's; we need to know how to get to the name


document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            const venueId = itemClicked.dataset.id
         //   const info = []
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {    //forgot to parseInt()
                    let checkTheBookings = checkBookings(venueId) //see line 10
                    let checkTheBands = checkBands(checkTheBookings)
                    let bandNames = checkTheBands.join(", "); // Join band names with a comma and space
                    window.alert(` ${bandNames} is playing at ${venue.name}`)
                } 
            }
        } 
    }
)



