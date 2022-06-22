This is the frontend for my User Authentication app. Backend -> <a href="https://github.com/Taran29/UserAuthServer">here</a>

<a href="https://user-auth-taran29.netlify.app/home">Deployed Website Link</a>

It's my first application using React.js 
It does all the basic user authentication tasks like: 
1. Register/Login<br>
   This was done using auth tokens generated from my <a href="https://github.com/Taran29/UserAuthServer">UserAuthServer</a> and persisting them using localStorage.
2. Forgetting/Updating Password<br>
   User verification for this was done using a security question (since mail servers cost money 😝), which was taken as user input at the time of registration. If the user inputs correct answer, a forgot-password token was generated on the server to ensure that only users who answered their question correctly would be able to change the answer.
3. Changing user's name<br>
   Pretty basic, was just meant to show that I can manipulate user data.
4. Logout<br>
   Clears the auth-token from localStorage so user cannot access certain privileges.

As for CSS, I learned and understood how to use flexbox and media queries. Also learned to use transitions and animations. 
Learned how to make hamburger menus and sidebars.
