# [InvestWatch](https://still-hollows-73515.herokuapp.com/#/)
####Search for stocks to get up to date prices and add companies to your watchlist
InvestWatch is a straightforward tool for beginner investors to gather a list of companies of interest and track their stock performance.  In the latest version of the app, users can:
- Search for companies by stock ticker symbol
- View real time stock price data including current price, price change, day and year high/low and trading volume
- Create and log in to personal account
- Once logged in, save stocks to their watch list
- Click any stock in their watchlist to view detail
- Remove a stock from their watchlist

### Technologies
##### InvestWatch is built on the Mongo-Express-Angular-Node (MEAN) stack. 
The Express server has several key responsibilities.  It connects with a Mongo database to store user credentials and stocks (ticker symbols only).  The 'users Api' handles the creation of users, authentication, adding, and removing stocks.  The sole function of the 'Finance Api' is to make GET requests to the Yahoo! Finance API to get updated stock info.  

Angular is used along with the 'route' and 'cookies' modules to render user and stock data, set up routes within the application and handle cookies for authentication.  InvestWatch also makes use of two Angular factory services for accessing the back end users and finance APIs.  Though the scale of the application is small at present, the modularity of the code makes for easier future expansion.
### What's Next
##### Possible Feature Additions

- Portfolio simulator: Buy and sell shares of stocks with 'play' money
  - Track portfolio value based on changing equity values
- Create and manage multiple watch lists for better organization
- Sort lists by different criteria
- Drag and drop re-ordering of lists
