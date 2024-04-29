# library System
This is a library management system where books can be added and removed from the library

## To run the backend
- navigate to `/library_system`
- run command `poetry install` make sure you have installed poetry, if not you can use `pip install poetry` to install it
- go to the directory `library_system/lib_app`
- to create a user for the system run `python manage.py createsuperuser` and follow the instructions
- to load sample data run `python manage.py load_samples` it will load some books just to see item in list table
- to run the test cases run the command `python manage.py test`
- to start backend server run the command `python manage.py runserver`


## To run front end app
- navigate to `/library_system/front_app`
- run the command `yarn install` if you are comfortable with npm you can also use `npm install`
- to start the application run the command `yarn start` or `npm start`
- Now you can login to the system and can add books, delete books and search them by name or author
