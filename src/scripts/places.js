import API from "./api.js";
import entryDom from "./domManipulator.js";
import modifyEvents from "./events.js";

API.getPlaces().then(entryDom.renderOptions)

API.getInterests().then(entryDom.renderInterests)

modifyEvents.addInterest()

modifyEvents.changeInterests()