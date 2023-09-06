const database = {
    venues: [{
        id: 1,
        name: "The Grand Ballroom",
        address: "123 Main Street, Anytown, USA",
        size: 2000,
        occupancy: 800
    }, {
        id: 2,
        name: "Riverside Convention Center",
        address: "456 Riverfront Avenue, River City, USA",
        size: 1500,
        occupancy: 400
    }, {
        id: 3,
        name: "The Garden Pavilion",
        address: "789 Park Lane, Parksville, USA",
        size: 20000,
        occupancy: 1800
    }, {
        id: 4,
        name: "Harborview Event Center",
        address: "101 Ocean Boulevard, Seaside Town, USA",
        size: 6000,
        occupancy: 900
    }, {
        id: 5,
        name: "Crystal Palace Banquet Hall",
        address: "555 Diamond Street, Gemville, USA",
        size: 600,
        occupancy: 100
    }, {
        id: 6,
        name: "Lakeside Manor",
        address: "888 Lakeside Drive, Lakeview, USA",
        size: 10000,
        occupancy: 5000
    }, {
        id: 7,
        name: "Mountainview Conference Center",
        address: "123 Summit Road, Mountain Town, USA",
        size: 500,
        occupancy: 50
    }, {
        id: 8,
        name: "The Skyline Terrace",
        address: "321 Highrise Avenue, Cityscape, USA",
        size: 2500,
        occupancy: 1000
    }, {
        id: 9,
        name: "Oakwood Barn & Event Venue",
        address: "123 Main Street, Anytown, USA",
        size: 1000,
        occupancy: 200
    }, {
        id: 10,
        name: "Beachfront Resort & Conference Center",
        address: "999 Sandy Beach Road, Coastal City, USA",
        size: 200,
        occupancy: 30
    }],
    bands: [{
        id: 1,
        name: "Electric Storm",
        members: 5,
        genre: "Rock",
        founded: 2011
    }, {
        id: 2,
        name: "Midnight Jazz Collective",
        members: 2,
        genre: "Jazz",
        founded: 1997
    }, {
        id: 3,
        name: "Neon Dreamscape",
        members: 4,
        genre: "Electronic",
        founded: 2018
    }, {
        id: 4,
        name: "Thunderstruck Blues Revival",
        members: 3,
        genre: "Blues",
        founded: 2001
    }, {
        id: 5,
        name: "Solar Serenades",
        members: 4,
        genre: "Indie Pop",
        founded: 2017
    }, {
        id: 6,
        name: "Astral Groove Explorers",
        members: 6,
        genre: "Funk",
        founded: 2006
    }, {
        id: 7,
        name: "Cosmic Echo Chamber ",
        members: 5,
        genre: "Psychedelic Rock",
        founded: 2008
    }, {
        id: 8,
        name: "Velvet Acoustic Serenity",
        members: 3,
        genre: "Folk",
        founded: 4
    }, {
        id: 9,
        name: "Quantum Funk Fusion",
        members: 6,
        genre: "Fusion",
        founded: 2007
    }, {
        id: 10,
        name: "Retro Synthwave Synthesis",
        members: 6,
        genre: "Synthwave",
        founded: 2012
    }],
    bookings: [
        {
            id: 1,
            bandId: 8,
            venueId: 2,
            date: "March 14 2024"
        }, {
            id: 2,
            bandId: 6,
            venueId: 2,
            date: "February 4 2024"
        }, {
            id: 3,
            bandId: 4,
            venueId: 6,
            date: "April 2, 2024"
        }, {
            id: 4,
            bandId: 5,
            venueId: 7,
            date: "October 31 2023"
        }, {
            id: 5,
            bandId: 10,
            venueId: 5,
            date: "November 12 2023"
        }, {
            id: 6,
            bandId: 3,
            venueId: 3,
            date: "December 4 2023"
        }, {
            id: 7,
            bandId: 7,
            venueId: 1,
            date: "December 31 2023"
        }, {
            id: 8,
            bandId: 1,
            venueId: 4,
            date: "January 1 2024"
        }, {
            id: 9,
            bandId: 2,
            venueId: 8,
            date: "February 20 2024"
        }, {
            id: 10,
            bandId: 9,
            venueId: 10,
            date: "November 10 2023"
        }]
}



export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}