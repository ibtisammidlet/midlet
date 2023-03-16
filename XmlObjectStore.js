function XmlObjectStore(ObjectFiles,Object_X1,FileUrl) {
    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
        dbVersion = 1.0;

    // Create/open database
    var request = indexedDB.open(ObjectFiles, dbVersion),
        db,
        createObjectStore = function (dataBase) {
            // Create an objectStore
            console.log("Creating objectStore")
            dataBase.createObjectStore(Object_X1);
        },

        getImageFile = function () {
            // Create XHR
            var xhr = new XMLHttpRequest(),
                blob;

            xhr.open("GET", FileUrl, true);
            // Set the responseType to blob
            xhr.responseType = "blob";

            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    console.log("Image retrieved");
                    
                    // Blob as response
                    blob = xhr.response;
                    console.log("Blob:" + blob);

                    // Put the received blob into IndexedDB
                    putElephantInDb(blob);
                }
            }, false);
            // Send XHR
            xhr.send();
        },

        putElephantInDb = function (blob) {
            console.log("Putting elephants in IndexedDB");

            // Open a transaction to the database
            var readWriteMode = typeof IDBTransaction.READ_WRITE == "undefined" ? "readwrite" : IDBTransaction.READ_WRITE;
            var transaction = db.transaction([Object_X1], readWriteMode);

            // Put the blob into the dabase
            var put = transaction.objectStore(Object_X1).put(blob, "image");

            // Retrieve the file that was just stored
            transaction.objectStore(Object_X1).get("image").onsuccess = function (event) {
                var imgFile = event.target.result;
                console.log("Got elephant!" + imgFile);

                // Get window.URL object
                var URL = window.URL || window.webkitURL;

                // Create and revoke ObjectURL
                var ObjectURL = URL.createObjectURL(imgFile);

                // Set img src to ObjectURL
                var imgElephant = document.getElementById(Object_X1);
                imgElephant.setAttribute("src", ObjectURL);

                // Revoking ObjectURL
                imgElephant.onload = function() {
                    window.URL.revokeObjectURL(this.src);
                }
            };
        };

    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };

    request.onsuccess = function (event) {
        console.log("Success creating/accessing IndexedDB database");
        db = request.result;

        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };
        
        // Interim solution for Google Chrome to create an objectStore. Will be deprecated
        if (db.setVersion) {
            if (db.version != dbVersion) {
                var setVersion = db.setVersion(dbVersion);
                setVersion.onsuccess = function () {
                    createObjectStore(db);
                    getImageFile();
                };
            }
            else {
                getImageFile();
            }
        }
        else {
            getImageFile();
        }
    }
    
    // For future use. Currently only in latest Firefox versions
    request.onupgradeneeded = function (event) {
        createObjectStore(event.target.result);
    };
}


/* usage base
var ObjectFiles = "JsonData"; // was "elephantFiles" // the indexeddb database will be opened/create (eg, JsonData) 
var Object_X1 = "data"; // was "elephants" // the object in the indexeddb database that you will create to store the file in (eg, subbind) 
var FileUrl = "./data.json"; // was  "elephant.png" // the file (need to be url use this ) that you will inject the object, JsonData(database name)>>subbind (object name) >> 2.4.4.json (injected file)
XmlObjectStore(ObjectFiles,Object_X1,FileUrl); // calling the function with variables
==> ObjectURL var // should console log this console.log(ObjectURL) should give blob:https://xx* you open it you find the json (which provided from the blob like you see)
https://developer.chrome.com/docs/apps/offline_storage/#unlimited // not importent for you, found a leak, but might worth reading
*/