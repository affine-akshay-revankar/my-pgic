
#Extracting required libraries
import numpy as np
import pandas as pd
import warnings
warnings.filterwarnings('ignore') 

filename = r'D:\7. P&G\Rakesh\Task - 1\P&G Global Hackathin_Mockup_v5_1.xlsx'
data = pd.read_excel(filename)

def show_details(input_start_date,input_end_date,input_state,input_city,input_product):
    
    '''
    DOCSTRING
    input - start_date,end_date,state,city,product name
    output - list of dictionaries of all rows
    '''
    
    # Date filter
    date_filter = (data['Date'] >= input_start_date) & (data['Date'] <= input_end_date)
    
    # Date, State,City and Product filter
    filter_Data = data[(date_filter) & (data.State == input_state) & (data.City == input_city) & (data.Product == input_product)]

    filter_Data['Date'] = filter_Data.Date.astype(str)
    
    # Converting to json and appending to a list
    filter_data_list = list(filter_Data.apply(lambda x: x.to_json(), axis=1))
    
    return filter_data_list