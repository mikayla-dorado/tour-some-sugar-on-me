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
        if (bandIds.includes(band.id)) { //.INCLUDES
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


// }
// if (data.length === 0) {
// // The Shanghai, China dock is currently unloading nothing
// window.alert(`${location} is currently unloading nothing`)
// } else if (data.length === 1) {
// window.alert(`${location} is currently unloading ${data[0]}`) 
// } else if (data.length > 1) {
//     window.alert(`${location} is currently unloading ${data.join(", ")}`)
//     //display each item in the array data, using .join()
// }
// }




//window alert should be presented to the user that displays all of the bands that have booked the venue when clicked. 
//"band 1, 2 are playing venue name" (band 8 and 6 are playing at venue 2)

/*



import { getDocks, getHaulers } from "./database.js"

const haulers = getHaulers()
const docks = getDocks()

export const DockList = () => {


    let docksHTML = "<ul>"

    for (const dock of docks) {


        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li class="dock" data-name="${dock.location}" data-id="${dock.id}" data-type="dock">"${dock.location}"</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

// 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {

            const dockId = itemClicked.dataset.id //dock.id PK
            const location = itemClicked.dataset.name
        
            const data = []
            
                 //iterate the docks array
                //if a hauler is currently at the dock, 
                //iterate the haulers array
                //for each hauler if the hauler.dockId is equal to the dock.id
                for (const hauler of haulers) {
                    if (hauler.dockId === parseInt(dockId)) {
                        data.push(hauler.name)
                    }
                    
                

            
        }
)


*/
