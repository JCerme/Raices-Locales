![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_1.png)

# 🛍️ Raíces Locales

Raíces Locales is an online store for handmade products, designed as a project for the ReactJS course by Coderhouse. The project allowed me to delve deeply into ReactJS, utilizing various hooks such as useState, useEffect, useRef, and useContext. 

## 🎯 Functionality
### Homepage
Upon landing on the homepage, you are greeted with a presentation carousel showcasing featured products, followed by a selection of products available in the store. Each product card displays an image, name, and price.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_2.png)

### Shop Page
The shop section allows you to browse through all the available products. To ease navigation, there's a category menu that enables you to filter products based on their category. If a category doesn't exist or no products are available under a selected category, an error component is displayed.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_5.png)

### Product Details
Clicking on a product card will take you to the product details page. Here, you can see a more detailed description of the product, along with its name, price, and available stock. You can add the product to your cart from this page, but only if the requested quantity doesn't exceed the available stock.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_3.png)

### Cart
The cart maintains a tally of the products you've chosen to purchase. It displays the subtotal (excluding tax) and the total amount (including tax). The cart data is saved in local storage, so your selections won't be lost even if you close the browser.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_6.png)

### Checkout
At checkout, you can simulate a purchase. The app validates all input fields to ensure they comply with the desired format, and that the "repeat email" field matches the email address you've entered. If a field is incorrectly filled, an error message is displayed. If everything is in order, you can proceed with the simulated purchase. The app will then redirect you to the homepage, add a new order to the Firebase database, and empty the user's cart.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_7.png)

### Notifications
Throughout your interaction with the app, various notifications will be displayed using Toastify and SweetAlert2. For instance, when you successfully add a product to your cart, a notification will appear. Or if an error occurs during checkout, an error message will be displayed.

![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_4.png)
![App Screenshot](https://raiceslocales.jcerme.com/media/raiceslocales_8.png)

This detailed functionality ensures a smooth and user-friendly shopping experience, resembling the operations of a real-world online store.


## 🛠️ Technologies and Libraries Used

Here's a list of the main technologies I used in this project:

- **React:** This project was a great opportunity to delve deeper into this JavaScript library. I've been able to practice and solidify my understanding of various hooks, including useState, useEffect, useRef, and useContext.

- **HTML & SASS:** Used to build and style the components of the website.

- **npm & react-dom:** Essential tools for managing packages and rendering React components.

- **React Router:** This was used for setting up the routing for the application, allowing for navigation between different components without page refresh.

- **Firebase:** I used Firebase to handle the products and orders databases. This gave me real-world experience in implementing and interacting with a NoSQL database.

In addition, I also used several libraries to enhance user experience and assist in development:

- **React Icons & Slick:** These were used to enhance the UI of the app, with React Icons providing a vast selection of icons and Slick offering a powerful carousel component.

- **Toastify & SweetAlert2:** Both of these libraries were used for displaying notifications to the user in a visually appealing manner.


## 📖 What I've Learned

This project was a fantastic learning experience, giving me the chance to further explore React and its hooks, as well as learn how to implement Firebase for handling databases. I've learn how the react hooks works and I've implement the useContext hook, which was used to create a global state for the cart. There I used differents hooks in different conditions like the useRef, useState or useEffect to manage validations or fetch data. I also got hands-on experience with implementing various libraries into a React project and building a complete online store. I'm confident that the skills and knowledge I've gained from this project will greatly assist me in future development work.

## 🚀 About Me
My name is Jorge, but I prefer to be called Cerme (JCerme).

I am a Web Application Development Technician with extensive knowledge in Back-end and Front-end (Full-Stack Developer).

I also have knowledge in Cybersecurity and UX/UI Design, among many others areas. I love exploring the technological world, and my goal is to provide users with a comfortable, reliable, and attractive experience.

Any suggestions or contributions are welcome.
You can contact me at:

[![portfolio](https://img.shields.io/badge/https://jcerme.com-5f17ce?style=for-the-badge&logo=ko-fi&logoColor=white)](https://jcerme.com/)
[![linkedin](https://img.shields.io/badge/jorge_cermeno-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/jorge-cermeno)
[![correo](https://img.shields.io/badge/contact@jcerme.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@jcerme.com)
