import htmlMaker from "./htmlMaker.js"
import API from "./api.js"

const entryDom = {
    renderOptions(places) {
        const optionContainer = document.querySelector("#placeOptionId")
        places.forEach(place => {
            optionContainer.innerHTML += htmlMaker.makePlaceOption(place)
        })
    },

    renderInterests(interests) {
        const  interestContainer = document.querySelector("#interestRenderId")
        interestContainer.innerHTML = ""
        interests.forEach(interest => {
            interestContainer.innerHTML += htmlMaker.makeInterestHtml(interest)
        })
    },

    renderReview() {
        const reviewContainer = document.querySelector("#reviewSection")
        reviewContainer.innerHTML += htmlMaker.makeReview()
    },

    renderEdit(editId) {
        const hiddenId = document.querySelector("#interestId")
        const placeOption = document.querySelector("#placeOptionId");
        const interestName = document.querySelector("#locationNameId");
        const interestDesc = document.querySelector("#locationDescriptionId");
        const interestCost = document.querySelector("#locationCostId");
        const interestRev = document.querySelector("#reviewId")

        API.getInterestsEdit(editId).then(entry => {
            hiddenId.value = entry.id
            placeOption.value = entry.placeId
            interestName.value = entry.name
            interestDesc.value = entry.description
            interestCost.value = entry.cost 
            if (entry.review === "") {
                interestRev.value = "No Review yet"
            } else {interestRev.value = entry.review }
            
        })
    }

}

export default entryDom