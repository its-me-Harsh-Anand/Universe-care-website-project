## What is React-Testing-Library

Very often a concern that developers face is if their application works in the way it was intended to be. React Testing library is the solution to this. It is a utility tool that builds on top of DOM testing library and will query the DOM the same way a user would.

A React application(created using **Create React App** ) already have React Testing Library along with Jest but if you want to use it outside **Create React App** , it can be added using npm like:

>npm install --save-dev @testing-library/react

The library will help you increasing the accessiblilty of your application and the closer you get you get your test to a user using the componenet, the more confident you will have that your application will work when a real user uses it.

You should also keep in mind that React Testing library is not a test runner or a framework, it only provide method to write your test scripts, so you will need a testing framework like Jest