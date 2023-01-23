// Created by: Alex Nelson
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-ASSIGNMENT-6-API/sw.js", {
    scope: "/ICS2O-ASSIGNMENT-6-API/",
  })
}

/**
 * This function displays a different quote evry time the page is reloaded.
 */

const getQuote = async (URLAddress) => {
  try {

    //Code to get Api
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)

    //Expression randomizing the Quotes
    if (jsonData) {
        const randomizer = Math.floor(Math.random() * 1642)

      //Variables for quotes and author
        const quote = jsonData[randomizer].text
        const author = jsonData[randomizer].author

      //Display Quotes and Author
     document.getElementById("quote-author").innerHTML = "Quote: " + quote + "<br> <br>" + "Author: " + author 
  } else {
    console.log(error)
  }
    //Catch Errors
  } catch (err) {
    console.log(err)
  }
}

//Api link
getQuote("https://type.fit/api/quotes")
