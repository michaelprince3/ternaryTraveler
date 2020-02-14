const htmlMaker = {
    makePlaceOption(place) {
        return `
            <option value="${place.id}" id="${place.id}">${place.name}</option>
            `
    },

    makeInterestHtml(interest) {
        return `
        <section class="interest" id="interest--${interest.id}">
            <h2>${interest.name}</h2>
            <p>${interest.description}</p>
            <p>Cost: ${interest.cost}</p>
            <p>${interest.review}</p>
            <button id="editBtn--${interest.id}">Edit</button>
            <button id="deleteBtn--${interest.id}">Delete</button>
        </section>
        `
    },

    makeReview() {
        return `
            <fieldset>
                <textarea name="reviewText" id="reviewId" cols="60 rows="10"></textarea>
            </fieldset>
        `
    }
}

export default htmlMaker