# Roots (Landing page)
Roots is an online language learning platform that provides high-quality courses in Igbo language.
The platform will offer video lessons, interactive exercises and community features to aid learners of all levels improve their language skills.

We would love for you to try out our website and experience its full potential. Feel free to explore the different pages, provide feedback, and share your thoughts with us. We are always looking to improve and enhance our website to better serve our users.

To access our website, click here: [ROOTS](https://roots-landing-page.vercel.app/).

# Table of Contents
- [Roots (Landing page)](#roots-landing-page)
- [Features of Roots](#features-of-roots)
  * [Online courses ](#online-courses)
  * [Interactive exercises ](#interactive-exercises)
  * [Community features ](#community-features)
  * [Chatbot](#chatbot)
- [Screenshots](#screenshots)
- [Technologies used](#technologies-used)
- [Setting up the repository](#setting-up-the-repository)
- [Setting Up Firebase](#setting-up-firebase)
- [Testing](#testing)
  * [Types of tests](#types-of-tests)
    + [Unit tests ](#unit-tests)
    + [Integration tests ](#integration-tests)
    + [End-to-end tests](#end-to-end-tests)
  * [How to run the tests](#how-to-run-the-tests)
  * [Continuous Integration](#continuous-integration)
- [Deployment](#deployment)
- [Links ](#links)
- [Contributors](#contributors)

# Features of Roots

## Online courses: 
Roots will offer online courses in Igbo language. The courses will include written lessons, audio recordings, and video lessons. 
The lessons will cover topics such as basic vocabulary, grammar, and pronunciation. The courses will be self-paced, allowing learners to study at their own pace.

## Interactive exercises: 
The platform will include interactive exercises, such as quizzes and fill-in-the-blank exercises, that allow learners to practice what they've learned. 
These exercises will provide immediate feedback, helping learners to identify areas where they need to improve.

## Community features: 
The platformm will offer comunity features such as forums and social media groups, where learners can connect with each other and with native speakers of the language. This will allow learners to practice their language skills and to ask questions about the language and culture. 
The community features will be moderated to ensure a safe and respectful environment for all users. These features will allow learners to connect with other language learners and practice their language skills in a supportive environment.

## Chatbot
The ROOTS chatbot will built using Tiledesk, a powerful chatbot platform that enables developers to easily create, test, and deploy chatbots for various use cases. It will be a language learning assistant named Alex. It will provide personalized and interactive language learning experiences by engaging users in natural conversations in English language and will feature a variety of interactive learning tools like games and quizzes to make language learning fun and engaging.

# Screenshots
Here are some screenshots of the Roots online language learning platform:
![](/src/images/RootsImg.PNG)
![](/src/images/RootsImg0.PNG)
![](/src/images/RootsImg1.PNG)
![](/src/images/RootsImg2.PNG)
![](/src/images/RootsImg3.PNG)
![](/src/images/RootsImg4.PNG)

The `Screenshots` section provides screenshots of various pages in the project. These examples would help potential users get a better understanding of what the project looks like and how it works.

# Technologies used
| Technology | Version |
| ---------- | ------- |
| React | v17.0.2 |
| Firebase | v9.0.0 |
| React Router | v5.2.1 |
| React Icons | v4.8.0 |

In this project, we used `React v17.0.2` as the main front-end library to build the user interface. We also used `React Router v5.2.1` to handle client-side routing and navigation.

`Firebase v9.0.0` was used as the backend and database provider. We leveraged Firebase Authentication, Cloud Firestore, and Cloud Functions to handle user authentication, data storage, and serverless functions.

To style the components, we used `React Icons v.4.8.0`, a popular React UI framework that provides pre-built components and styles. Additionally, we used React Hooks to manage component state and perform side-effects, such as API calls and form submissions.

# Setting up the repository
To set up the repository, follow these steps:
- The React App was created with 
```
create-react-app
```
- Create a React App using 
```
npx create-react-app Roots
```
- Change directory to the ROOTS folder using 
```
 cd Roots
```
- Start the React App Development Server by running 
```
npm start
```
- Open `http://localhost:3000` to view the app in the browser.

- To deploy the React App after project build, run 
```
npm run build
```

# Setting Up Firebase
To set up Firebase, follow these steps:
- Go to `firebase.google.com`

- Click on `Get started` and create a firebase project.

- Create a firebase project and enter a project name.

- Enable google analytics for your firebase project, click continue, and choose the default firebase account for google analytics configuration.

- Click on `create project`.

- On the Firebase console, click on the web icon to get started.

- Register the app: Add the web app name and click on the option that allows Firebase hosting for the app.

- Add `Firebase SDK`

- In the terminal, run `npm install firebase` to add Firebase to the React project.

- On VsCode, create a Firebase folder in the src file and create a `firebase-config.js` file in the folder.

- Copy and paste the code snippet on the Firebase console to connect Firebase to the project.

- Install Firebase CLI, and run `npm install -g firebase-tools`.

- Deploy to Firebase hosting.

- Go to the main Firebase console, click on build, then authentication, and click on get started.

- Get started with Firebase auth by adding your first sign-in method.

- Click on the preffered sign-in method and enable it.

- Import the Firebase auth method to the `firebase-config.js` file and export it on the form file on the React app.
 
# Testing
Roots includes automated tests to ensure that the app is functioning correctly. These tests cover both the React components and the Firebase functionality.

## Types of tests

### Unit tests: 
These test individual React components to ensure that they render correctly and behave as expected.

### Integration tests: 
These test the interaction between React components and Firebase, to ensure that data is being stored and retrieved correctly.

### End-to-end tests:
These test the app as a whole, to ensure that it functions correctly from the user's perspective.

## How to run the tests
To run the tests locally, follow these steps:

- Clone the repository
- Install dependencies by running `npm install`
- Run `npm test` to start the test suite

The tests are run using `Jest`, a popular testing framework for React apps.

## Continuous Integration
Roots uses continuous integration to automatically run tests whenever code is pushed to the repository. We use `GitHub Actions` for this. Whenever a pull request is opened, GitHub Actions will run the test suite to ensure that the changes do not introduce any new bugs or issues.
 
# Deployment
The Roots landing page has been deployed on `Vercel`, and it can be accessed at the following URL: https://roots-landing-page.vercel.app/.

To deploy the app on Vercel, follow these steps:

- Create an account on Vercel (if you don't have one already).

- Connect the GitHub repository to your Vercel account.

- Configure the deployment settings, including the branch to deploy, build commands, and environment variables.

- Set up automatic deployments for our chosen branch so that the app would be updated whenever we pushed changes to the repository.

- We also configured some environment variables in the Vercel project settings, including the Firebase configuration variables.

Overall, the deployment process was straightforward and seamless. We appreciate Vercel's user-friendly interface and powerful features that made it easy to deploy and manage our app.

# Links 
- [Wireframe](https://www.figma.com/file/qpg55OACx3sX8gnn5dSZgk/Roots-Final-Designs?node-id=0%3A1&t=vtYKJoDRWu4PZvuK-0)
- [Landing Page GitHub Repo](https://github.com/ADA-Software-Engineering-Program/Roots-landing-page)
- [Main Product GitHub Repo](https://github.com/ADA-Software-Engineering-Program/Roots)
- [Vercel](https://roots-landing-page.vercel.app/)

# Contributors
- Ifechukwu Max-Oti
- Leila Yesufu
- Adetutu Deborah Oluwasanmi
- Adesina Mariam

