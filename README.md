# KoinX
![image](https://github.com/ManasMishra09/KoinX/assets/92935580/491e6fff-8028-4d11-8cc5-f79fde651a0d)
![image](https://github.com/ManasMishra09/KoinX/assets/92935580/b47f5a89-6597-4f77-b56f-01a503d59527)

## Mandatory Tasks:

- Implement all the components as given in the Figma design.
- Use Coingecko’s `/simple/price` API to fetch the price of bitcoin in USD and INR.
    - Coingecko API Documentation: https://www.coingecko.com/api/documentation
    - API Parameters:
        - `ids`: `bitcoin`
        - `vs_currencies`: `inr,usd`
        - `include_24hr_change`: `true`
    - This will give you the price of Bitcoin in USD, INR and 24H change. You can use USD’s 24H change to display the change value.
    - Sample API Response: {
  "bitcoin": {
    "inr": 5697177,
    "inr_24h_change": 3.6596920153414336,
    "usd": 68726,
    "usd_24h_change": 3.6767559459431545
  }

}- You can embed TradingView’s charts of BTCUSD in place of the chart component in the Figma design: https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/. You don’t have to implement the chart component from scratch, just use the TradingView widget. Try modifying the widget values to bring the widget design as close as the one in the Figma design.
- Use Coingecko’s `/search/trending` API to fetch the list of top 3 trending coins to be displayed in the “Trending Coins (24h)” component on the right. ([Sample API Response](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21))
- For the “You May Also Like” section, show the logo, symbol, price, price change and price graph of the “Trending Coins” that we fetched from the previous API.
    - Hint: For the graph, there is a `sparkline` property in the “Trending Coins” API response which gives the graph image for each coin.
    - The row should be a horizontally scrollable carousel.
    - You can repeat the same row twice, i.e., use the same data for the “Trending Coins” carousel below the “You May Also Like” carousel.
- Ensure that the UI is responsive according to the Figma design.
- The components that only contain text/images and are not dependent on any of the above mentioned APIs or integrations, please use any placeholder text/images according to the design.
- Host your code on GitHub.
- Deploy your code using tools like Netlify or Vercel.
- ## Optional Task:

- Make the token to be shown dynamic using the URL. For example, `/bitcoin` should show Bitcoin’s data and chart, `/ethereum` should show Ethereum’s data and chart and so on.
- You can assume that the name in the URL is the Coingecko ID of the coin.
- You can get the symbol of the coin using the `/coins/{id}` API from Coingecko in order to render the relevant price chart from TradingView.

## **Notes:**

1. Think of this assignment as a production grade project. Using best practices, writing clean code etc. will fetch you additional points.
2. We care about the usage of version control and the way you structure(and name) your commits!
