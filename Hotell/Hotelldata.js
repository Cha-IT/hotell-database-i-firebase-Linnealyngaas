// import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
import { db } from "./firebaseconfig.js";
import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Lager et nytt dokument i samlinga "elever"

async function addRoom(roomNo, floor, roomType, noOfBeds, isAvailable) {
  await setDoc(doc(db, "rooms", roomNo), {
    floor: floor,
    roomType: roomType,
    noOfBeds: noOfBeds,
    isAvailable: isAvailable,
  });
}
addRoom("101", 1, "single", 1, false);
addRoom("102", 1, "single", 1, true);
addRoom("103", 1, "double", 2, true);
addRoom("201", 2, "double", 2, false);
addRoom("202", 2, "double", 3, true);
addRoom("203", 2, "suite", 6, false);
