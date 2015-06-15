# collab-and-code
collab-and-code is a collaborative editor where multiple users can edit the code at the same time. 
Also, they can compile and/or code in various languages.

To support the collaboration it uses firepad and redis. It also uses Hackerearth platform to complile and/or run code in various languages like C, C++, Java, Python, etc.

The server of this application is developed using node.js 

Live version of this is currently available at http://collabandcode-itwsgroup10.rhcloud.com/. Once you click this url, a unique hash is generated and appended to the url, which acts as your own session. Share that link with people you want to collaborate with and you are on your way!

# Instructions to run
1. Clone the repo
2. Change the redis url to point to your account
3. Run it with the command node bin/www
4. Visit http://127.0.0.1:3001
