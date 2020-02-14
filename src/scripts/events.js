import API from "./api.js";
import entryDom from "./domManipulator.js";

const modifyEvents = {
  addInterest() {
    const saveBtn = document.querySelector("#saveBtnId");

    saveBtn.addEventListener("click", () => {
      const hiddenId = document.querySelector("#interestId");
      const placeOption = document.querySelector("#placeOptionId");
      const interestName = document.querySelector("#locationNameId");
      const interestDesc = document.querySelector("#locationDescriptionId");
      const interestCost = document.querySelector("#locationCostId");
      const interestRev = document.querySelector("#reviewSection");

      const newInterestEntry = {
        placeId: placeOption.value,
        name: interestName.value,
        description: interestDesc.value,
        cost: interestCost.value,
        review: ""
      };

      const clearForm = () => {
        placeOption.value = "select";
        interestName.value = "";
        interestDesc.value = "";
        interestCost.value = "";
        interestRev.innerHTML = "";
      };

      const entryArray = [interestName, interestDesc, interestCost];
      const newArray = [];

      entryArray.forEach(entry => {
        if (entry.value !== "") {
          newArray.push(entry);
        } else {
          alert("You missed Something!");
        }
      });

      if (hiddenId.value === "" && newArray.length === 3) {
        API.saveInterests(newInterestEntry).then(() =>
          API.getInterests()
            .then(entryDom.renderInterests)
            .then(clearForm)
        );
      } else if (newArray.length === 3) {
        const interestRev = document.querySelector("#reviewId");
        newInterestEntry.id = parseInt(hiddenId.value);
        newInterestEntry.review = interestRev.value;
        API.editInterests(newInterestEntry).then(() =>
          API.getInterests()
            .then(entryDom.renderInterests)
            .then(clearForm)
        );
      }
    });
  },

  changeInterests() {
    const editDeleteListener = document.querySelector("#interestRenderId");

    editDeleteListener.addEventListener("click", () => {
      if (
        event.target.id.startsWith("deleteBtn--") &&
        confirm("Are you Sure?")
      ) {
        const deleteButton = event.target.id;
        const deleteArray = deleteButton.split("--");
        const deleteId = deleteArray[1];
        API.deleteInterests(deleteId).then(() =>
          API.getInterests().then(entryDom.renderInterests)
        );
      } else if (event.target.id.startsWith("editBtn--")) {
        const editButton = event.target.id;
        const editArray = editButton.split("--");
        const editId = editArray[1];
        entryDom.renderReview();
        entryDom.renderEdit(editId);
       }
    });
  }
};

export default modifyEvents;
