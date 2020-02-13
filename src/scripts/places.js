import API from "./api.js";
import entryDom from "./domManipulator.js";

API.getPlaces().then(entryDom.renderOptions)

API.getInterests().then(entryDom.renderInterests)