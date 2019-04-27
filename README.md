# Online Life Planner

## About Project 
- The proposed use and purpose of this project is to provide users with an online life planner, that will keep track of people’s busy schedules with the use of a calendar, which allows them to perform a CRUD (create, update and delete) operation. This calendar is only visible and accessible through the web application. 

## Installing Application

- Download webstorm by following this tutorial : https://www.jetbrains.com/webstorm/download/#section=windows and https://www.youtube.com/watch?v=JFQ74O6itDs
- Download MongoDB follow here: https://www.youtube.com/watch?v=FwMwO8pXfq0

## Running Application
- To run the application ensure that the steps above are done already.
- Clone this repository into your terminal.
- Open one terminal for the server side and runt the following command : nodemon you should see that the server has started and connected to the database.
- Open another terninal for the client-side, change the directory to ../angularcon.
- Then run the following command: ng serve
this should start the server on port 4000 and there you can start scheduling.

## Guide

- If you run into error after all the steps above are completed, this just means that you need to upgrade the dependencies in the package.json file.
- There are two: one for the front-end and one for the back-end.
- These have to be updated speretaely in different terminals, just as you ran the server and client.
- use the following command in both: npm update or npm install
- Webstorm would always show and indicate what packages need to be updated.
