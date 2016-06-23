Spinner tracks your interaction with your music across your collections. It uses an Angular front-end, a Rails 4 API, Devise for authentication and bootstrap for the styling. 

The present version is based solely on a physical vinyl collection, with data structured according to the Discogs.com API. Further Discogs integration is coming soon. Partial integration (including OAuth integration) can be found here, but be forewarned: you'll have to register an app to get your user-agent credentials, which that version expects to be stored using Figaro. 

# Installation

1. fork & clone this directory. 
2. rake db:migrate, then rake db:seed
  * This will set up your tables, add Devise to users, and set a default album image. 
..* This will also create six test users.
3. Log in: 
..* For the main account, you can use admin@email.com/password
..* For test users, the password is please123 and the username is Test_user[INSERT NUMBER]@example.com


