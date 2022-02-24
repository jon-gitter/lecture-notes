# Class 13 Lecture Notes

## Data Persistance

- local storage
  - its an object stored in browser application on your computer
  - local storage is specific to the one computer
  - no expiration, clears when you clear it

- database
  - SQL - postgres(401 class)
  - NoSQL - mongodb (301 class)


## Why

- so users can retain data between page refreshes or accessing different parts of the application

## local storage

- can use jsonformatter to convert objects into json format

### how it is stored

- JSON (javascript object notation)
- key: value pair
- to stringify our objects using a method `JSON.stringify()`
  - object we want to stringify

### methods on our local storage object

- `setItem(key, value)`
- `getItem(key)`
- `clear()`
- `removeItem(key)`

- `localStorage.getItem(key)`

### how to find local storage
- inside "storage" of browser when you inspect


### Steps
- to put something into storage
  - stringify it
    - `let stringifiedItems = JSON.stringify(myObj)`
      - when we stringify the object/data it changes, it strips any reference to our constructor away
    - `localStorage.setItem('myStuff', stringifiedItems);`
- to get it out of local storage
  - `let stuffImGettingOut = localStorage.getItem('myStuff');`
  - `let parsedStuff = JSON.parse(stuffImGettingOut);` - parse so our code can read it again
    - parse = unstringified when bringing something out of local storage

- when you stringify an object from constuctor, it strips away what is instantiated from that constructor.  FYI ***Stingifing something can't stringify a function***


- becomes a special string(JSON string) after we stringify something. so ""
  - keys are the individual pieces inside the special string like elements in an array
    - when we use localStorage. localStorage itself is an object so after we stringify the special string (JSON string) becomes a property inside the localStorage object. The keys 


    localStorage {
      myStuff: "stringifiedItems that has 'keys(like elements in array)' keys hold the object data"
    }
