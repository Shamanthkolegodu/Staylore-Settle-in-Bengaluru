import pandas as pd
import numpy as np

dataset = pd.read_csv('Bengaluru_House_Data.csv')

dataset = dataset[dataset["balcony"].notna()]
dataset = dataset[dataset["society"].notna()]
dataset = dataset[dataset["location"].notna()]

def is_float(x):
    try:
        float(x)
    except :
        return False
    return True

def convert_sqft_to_num(x):
    tokens = x.split('-')
    if len(tokens) == 2:
        return (float(tokens[0]) + float(tokens[1]))/2
    try:
        return float(x)
    except:
        pass

dataset['total_sqft'] = dataset['total_sqft'].apply(convert_sqft_to_num)
dataset = dataset[dataset["total_sqft"].notna()]


## distributing independent features in 'X' and dependent feature in 'y'
features = ['size','total_sqft']
X = dataset[features] 
y = dataset['price']

## splitting the dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test = train_test_split(X,y,test_size = 1/3, random_state = 0)

## training  the model
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train,y_train)

print(regressor.coef_)
print(regressor.intercept_)

