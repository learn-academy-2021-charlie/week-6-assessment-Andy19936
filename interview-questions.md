# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Well first youd need to generate a migraton file from your terminal and name it what your changes are going to be in this case id go with adding-foreign-key-to-table next you add the foreign key with a name of animal-id in your sightings model and run your migrartion in the terminal.

  Researched answer: so a bit of an update you would still run your migration and inside of the migration youd have your method def change inside youd write insnake case add_foreign_key :sightings, :animals and the command would be rake db:migrate   



2. Which RESTful API routes must always be passed params? Why?

  Your answer: Those routes would be show,update and destroy and they need to be passed params so the routes know what instance in the table you are trying to display or edit. 

  Researched answer: I believe my above answers are correct and I am not sure about create now that I think about because it is also passed params but in a different sense it is passed params to only allow specific input when adding content to your table but these aren't necessarily used with my restful routes to my knowledge



3. Name three rails generator commands. What is created by each?

  Your answer:
  rails g migration creates a migration file where you can add changes to your table
  rails g new model creates a model aka table that stores all your data
  rails g controller creates and links a controller for your model and view folder

  Researched answer:
rails g migration adds boiler plate code making a new file so you dont have to go in and figure out how rails wants you to type everything inside the migration file you can add the changes you want to make to your table

rails g model creates boiler plate as referrenced above for adding a model migration file to your app and it takes the params of your table name column_name:'expected input type'

rails g controller generates all our boiler plate code and makes a file inside of our controllers folder where we can add all our methods inside the new controller we have just made


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students     this would be your index method which runs your query .all on your table rendering all your contents      

method="POST"   /students       this would be your create method which adds your table entry made within the new method to the actual table

method="GET"    /students/new this is the new method that has a form for you to input a new table entry into the table on its view file to be later implemented into the table by the create method

method="GET"    /students/2  this is your show method it uses params to show you the specific table entry with its table id number  

method="GET"    /students/edit/2    this would be your edit method which makes a form on its view file to editan entry and later be implemented to the table with the update method

method="PATCH"  /students/2    this is your update method which takes the info entered into the form on your edit method and actually implements it into the table    

method="DELETE" /students/2 this would be your destroy method it takes the params of your table id number and erases it from our database's table      



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I can see all the items on my to do list

2. As a user I can see a specific item in my to do list

3. As a user I can edit an item in my to do list

4. As a user I can remove an item from my to do list 

5. As a user I can add an item to my to do list

6. As a user I can add a status of completed to my task

7. As a user I can add a time my task was completed at

8. As a user I can seperate my items in my to do list into a day I want to complete them by

9. As a user I can add multiple days to my todo list app 

10. As a user I am prompted with a nice message congratulating me on my completion of a task

Stretch Challenge

1. As a user I can log in and save my specific to do lists to my username