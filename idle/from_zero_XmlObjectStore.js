// XmlObjectStore from zero , full by my self

## getting the image
var response = await fetch("https://raw.githubusercontent.com/robnyman/robnyman.github.com/master/html5demos/indexeddb/elephant.png");
var blob = await response.blob();
console.log(blob);
// ^ here i fatched the img and get its blob, there is no simple then this code, you need to wait and use the response.blob(); to get the blob of the img




## all of this just to open database
const dbName = "yourDatabaseName";
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

request.onerror = function(event) {
  // Handle errors
  console.log("Error opening database");
};

request.onsuccess = function(event) {
  // Database opened successfully
  const db = event.target.result;
  console.log("Database opened successfully");
};

request.onupgradeneeded = function(event) {
  // Handle database upgrade
  const db = event.target.result;
  console.log("Upgrading database");

  // Create or modify object stores and indexes here
};
