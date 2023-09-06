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

const findVenue = (booking, allVenues) => {
    let bookingVenue = ""

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}



//TODO: Why is line 41 and 42 singular band and venue?
//? Answer: in our findVenue function that we called, we only loop through one venue at a time, same for band

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues) //booking needs to be singular here!!!
        const band = findBand(booking, bands)
        html += `<li>${band.name} is playing at ${venue.name} on ${booking.date}</li>` //TODO: incorporate {booking.date}
    }

    html += "</ul>"

    return html
}

// export const Orders = () => {
//     let html = ""
//     html = "<ul>"

//     for (const booking of bookings) {
//         const employee = findEmployee(order, employees)
//         const product = findProduct(order, products)

//         html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
//     }

//     html += "</ul>"

//     return html
// }


/*
? import { getProducts, getEmployees, getOrders } from "./database.js"
? Get copy of state for use in this module
?const products = getProducts()
?const employees = getEmployees()
?const orders = getOrders()

// Function whose responsibility is to find the band for an booking

//? const findProduct = (order, allProducts) => {
//?     let orderProduct = ""

//?     for (const product of allProducts) {
//?         if (band.id === booking.bandId) {
//?             bookingBand = badn
//?         }
//?     }
//?     return orderProduct
//? }


//? const findEmployee = (order, allEmployees) => {
//?   let orderEmployee = ""
//?     for (const employee of allEmployees) {
//?         if (employee.id === order.employeeId) {
//?             orderEmployee = employee
//?         }
//?     }
//?     return orderEmployee
//? }



export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}
*/