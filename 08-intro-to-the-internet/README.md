# (1) Intro to Mod 2 & the Internet


## Recap Mod 1:
Some of the things we Learned last Mod
* **Ruby** - Happiest Programming Language (Object Oriented/ Interpreted)
* **Objects** - the programming languages representation of something in the real world
* **Domain Modeling** - Build relationships beteweeen objects 
* **SQL** - Language to speak/query data from database 
* **ORM** - translations of data between classes and database
* **Active Record** - The ORM that we will be using
* **CRUD** -  Create Read Update Delete




## Overview Of Mod 2:
By the end of this Mod you should be able to create a fullstack web application
* HTTP 
  * Request & Response
  * REST 

* Sinatra
  * MVC
    - Models
    - Views
    - Controllers
  * ERB
  * How CRUD actions map to RESTful routes

* Rails
  * Routes 
  * Rails helpers

* HTML/CSS



## Introduction to the internet

* What is the internet?

  Internet - Hardware
  Web - Software


  * How is data sent over the internet?
  * TCP - Transmission Control Protocol -> how data gets sent
  * IP - Internet Protocol, IP Adress -> where 
  * HTTP - HyperText Transfer Protocol - what kind of data
  * HTML - HyperText Markup Language - Content and structure of a page.
 
* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
  * `nslookup`
  * https://iplocation.com/

  * What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?

  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee
  * http://info.cern.ch/hypertext/WWW/TheProject.html


* What is a server? What is a client?
Client - User/browser (REQUEST)
Server - Where our application lives (RESPONSE)

* What is the request / response cycle?
  - Anatomy of Request
    - URL/PATH - HTTP Verb/Method/Action (GET, POST, PATCH, DELETE)
    - Headers - Meta Data 
    - Body - Additional information from User
 
  - Anatomy of Response
    - Status Code 
    - Headers
    - Body 

  

* With a client and server, which makes the request? Which sends the response?

* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl

* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
    * https://http.cat/
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?
  * What is a URL? Which part of a URL is the scheme (protocol)? Where is the host? The port? The path? Query string?  What is the purpose of each of these parts? 
    * https://docs.google.com/presentation/d/1no3yw_Vw4hBzGDlsEDcubvFnowi-Exjg9FW_VJid_U0/edit#slide=id.g378a2b8862_0_5





## Intro to Sinatra
* Build a basic web app in 30 seconds
* Do basic web requests in Sinatra
* Explain what Sinatra is



