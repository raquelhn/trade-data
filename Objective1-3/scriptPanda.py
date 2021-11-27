import pandas

df = pandas.read_csv('market_trades.csv')

df2=df.assign(priceTotal=df['price']* df['quantity'])
#here it's the answer for VWAP Per unique stock / trade type combination
df_res_1A =df2[['epic','trade type','quantity','priceTotal']]
df_res_prev1A=df_res_1A.groupby(['epic','trade type']).sum()
df_res_perStockperType=df_res_prev1A.assign(VWAP=df_res_prev1A['priceTotal']/ df_res_prev1A['quantity'])

#print(df_res_prev1A)
print(df_res_perStockperType)

#here it's the answer for VWAP Per stock
df_res_1B =df2[['epic','quantity','priceTotal']]
df_res_prev1B=df_res_1B.groupby(['epic']).sum()
df_res_perStock=df_res_prev1B.assign(VWAP=df_res_prev1B['priceTotal']/ df_res_prev1B['quantity'])

#print(df_res_perStock)

save_One= input("Would you like me to save the data in two different files in a csv format (please only answer yes or no)")
if save_One=='yes':
    df_res_perStock.to_csv('VWAP_perStock.csv',sep=',')
    df_res_perStockperType.to_csv('VWAP_perUniqueStock.csv',sep=',')


save_Two= input("Would you like me to save the data in two different files in a excel format (please only answer yes or no)")
if save_Two=='yes':
    df_res_perStock.to_excel('VWAP_perStock.xlsx')  
    df_res_perStockperType.to_excel('VWAP_perUniqueStock.xlsx')





#these are files that I would be using for the objective 4 
tradesTable=df.to_json('trades.json',orient="records")
#print(tradesTable)
df_res_perStock['VWAP'].to_json('VWAP_perStock.json',orient="index")  
df_res_perStockperType['VWAP'].to_json('VWAP_perUniqueStock.json',orient="index")