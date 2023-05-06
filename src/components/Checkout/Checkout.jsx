import React from 'react'

const Checkout = () => {
    // Add a new document in collection "cities"
    db.collection("orders").add({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

  return (
    <div>
      
    </div>
  )
}

export default Checkout
