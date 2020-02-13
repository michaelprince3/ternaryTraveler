import htmlMaker from "./htmlMaker.js"

const entryDom = {
    renderOptions(places) {
        const optionContainer = document.querySelector("#placeOptionId")
        places.forEach(place => {
            optionContainer.innerHTML += htmlMaker.makePlaceOption(place)
        })
    },

    renderInterests(interests) {
        const  interestContainer = document.querySelector("#interestRenderId")
        interests.forEach(interest => {
            interestContainer.innerHTML += htmlMaker.makeInterestHtml(interest)
        })
    }

}

export default entryDom