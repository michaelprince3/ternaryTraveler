

const API = {
    getPlaces() {
        return fetch ("http://localhost:3000/places")
        .then(resp => resp.json())
    },

    getInterests() {
        return fetch ("http://localhost:3000/interests")
        .then(resp => resp.json())        
    }
}

export default API