

const API = {
    getPlaces() {
        return fetch ("http://localhost:3000/places")
        .then(resp => resp.json())
    },

    getInterests() {
        return fetch ("http://localhost:3000/interests")
        .then(resp => resp.json())        
    },

    getInterestsEdit(editId) {
        return fetch (`http://localhost:3000/interests/${editId}`)
        .then(resp => resp.json())
    },

    saveInterests(entry) {
        return fetch ("http://localhost:3000/interests", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },

    deleteInterests(entryId) {
        return fetch(`http://localhost:3000/interests/${entryId}`, {
            method: "DELETE"
        })
    },

    editInterests(entryId) {
        return fetch(`http://localhost:3000/interests/${entryId.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryId)
        })
    }
}

export default API