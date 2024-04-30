import { db } from "./firebaseconfig.js";
import {
  getDocs,
  query,
  where,
  collection,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// import { getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

const querySet = await getDocs(
  query(collection(db, "rooms"), where("floor", "==", 2))
); // returnerer en liste med dokumenter som møter betingelsen, som lagres i listen/arrayen querySet

// Går gjennom alle dokumenter returnert av spørringen
querySet.forEach((docu) => {
  // Skriver ut data fra hvert av dokumentene til konsollen
  console.log(
    docu.id,
    "etasje",
    docu.data().floor,
    "romtype",
    docu.data().roomType,
    "Antall sengeplasser",
    docu.data().noOfBeds,
    "Tiljengelig",
    docu.data().isAvailable
  );
});

const querySet2 = await getDocs(
  query(collection(db, "rooms"), where("roomType", "==", "suite"))
); // returnerer en liste med dokumenter som møter betingelsen, som lagres i listen/arrayen querySet

// Går gjennom alle dokumenter returnert av spørringen
querySet2.forEach((docu) => {
  // Skriver ut data fra hvert av dokumentene til konsollen
  console.log(
    docu.id,
    "etasje",
    docu.data().floor,
    "romtype",
    docu.data().roomType,
    "Antall sengeplasser",
    docu.data().noOfBeds,
    "Tiljengelig",
    docu.data().isAvailable
  );
});

const querySet3 = await getDocs(
  query(
    collection(db, "rooms"),
    where("isAvailable", "==", "double"),
    where("noOfBeds", "==", "3")
  )
); // returnerer en liste med dokumenter som møter betingelsen, som lagres i listen/arrayen querySet

// Går gjennom alle dokumenter returnert av spørringen
querySet3.forEach((docu) => {
  // Skriver ut data fra hvert av dokumentene til konsollen
  console.log(
    docu.id,
    "etasje",
    docu.data().floor,
    "romtype",
    docu.data().roomType,
    "Antall sengeplasser",
    docu.data().noOfBeds,
    "Tiljengelig",
    docu.data().isAvailable
  );
});
