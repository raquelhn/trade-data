# Trade Project

The objective of this project is to read a csv file and from there calculate the average price per stock/ per unique stock. After this, I developed a react website in which is possible to filter the total data using the stock as an input, and to display graphs with the VWAP results.

## Objective 1 - 3
To calculate the Volume Weighted Average, it was neccesaty to open the csv file and extract the data, for this I used the python library pandas. Then I extract the information required to calculate the average price per stock and per unique stock. Once this is done, and the results printed in the console, the application ask the user if he or she wants to save the result in a csv file and/or an excel file and then it proceds to save the information in the same folder.

## Objective 4
From the previous data analysis and application, the results and general table were used to show the table in a webpage, and the user could be able to filter the stock by using the 'epic'. Additionally, at the beginning of the page 2 graphs are displayed showing the VWAP per stock, and per trade type.

The webpage was developed using react js and react chartjs, and css for the design.

## Objective 5
Since the data from the svc file shows the information in a period of time, a period that we do not have more infotmation about, then it is difficult to calculate other trading indicators. However is possible to get statistics like the mean, min and max of the VWAP per stock. For instance:

- CXRB  Min: 0.676949 Max: 0.676949
- EXMR  Min: 0.188064 Max: 0.188064
- FXOG  Min: 0.030444 Max: 0.030444
- HXSP  Min: 2.142574 Max: 2.142574

## Objective 6
From the results I was able to see that there wasn't much of a difference in the VWAP among trade types for each stock, however regarding the quantity I found interesting that the second largest quantity of trades is the stock: HXSP ordinary type, even tho is has the highest VWAP from all the stocks. While the less quantity of stocks found was from the CXRB stock

### Positives
It was my first time using python and panda for data analysis. I spend time researching the best way to do the data analysis and then I had to research how to install pandas in an M1 macbook, that is not as simple as it seems, in this subject if you have questions about it msg me, I will be happy to help.
It was my first time using the library Chart.js 

### Things to improve
With more time I would have like to create the whole application with django, for which I will create an interface that it will give me the option to upload a csv file, and from there calculate the avg stock prices, and then the user would be able to select the data format to save the results, see graphs and filter data. However due the time limitation, I consider it will be better to break apart the objective and try to find the solutions in the most efficient way.

I would like to spend more time in testing.
