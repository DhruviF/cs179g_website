import sys
import pandas as pd
import math
from datetime import datetime
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_auc_score, confusion_matrix, precision_score, recall_score

def predict_delay(departure_date_time, origin, destination):
    try:
        departure_date_time_parsed = datetime.strptime(departure_date_time, '%d/%m/%Y %H:%M:%S')
    except ValueError as e:
        return 'Error parsing date/time - {}'.format(e)

    month = departure_date_time_parsed.month
    day = departure_date_time_parsed.day
    day_of_week = departure_date_time_parsed.isoweekday()
    hour = departure_date_time_parsed.hour

    origin = origin.upper()
    destination = destination.upper()

    input = [{'Month': month,
              'DayofMonth': day,
              'DayOfWeek': day_of_week,
              'CRSDepTime': hour,
              'Origin_ATL': 1 if origin == 'ATL' else 0,
              'Origin_DEN': 1 if origin == 'DEN' else 0,
              'Origin_DTW': 1 if origin == 'DTW' else 0,
              'Origin_FLL': 1 if origin == 'FLL' else 0,
              'Origin_HNL': 1 if origin == 'HNL' else 0,
              'Origin_LAS': 1 if origin == 'LAS' else 0,
              'Origin_LAX': 1 if origin == 'LAX' else 0,
              'Origin_LGA': 1 if origin == 'LGA' else 0,
              'Origin_MSP': 1 if origin == 'MSP' else 0,
              'Origin_SLC': 1 if origin == 'SLC' else 0,
              'Dest_ATL': 1 if destination == 'ATL' else 0,
              'Dest_DEN': 1 if destination == 'DEN' else 0,
              'Dest_KOA': 1 if destination == 'KOA' else 0,
              'Dest_FLL': 1 if destination == 'FLL' else 0,
              'Dest_LAS': 1 if destination == 'LAS' else 0,
              'Dest_LAX': 1 if destination == 'LAX' else 0,
              'Dest_LIH': 1 if destination == 'LIH' else 0,
              'Dest_MCO': 1 if destination == 'MCO' else 0,
              'Dest_OGG': 1 if destination == 'OGG' else 0,
              'Dest_ORD': 1 if destination == 'ORD' else 0 }]

    return model.predict_proba(pd.DataFrame(input))[0][0]

df = pd.read_csv('/Users/dhruvifaria/Desktop/cs179g/cs179g_website/src/components/MLComponents/2018HundredThousand.csv')

#finding most popular origin  
originCount = df["Origin"].value_counts()

#creating df with 10 most popular orgin locations
df = df[(df.Origin == "ATL") | (df.Origin == "DEN") \
    | (df.Origin == "DTW") | (df.Origin == "HNL") \
    | (df.Origin == "MSP") | (df.Origin == "LAS") \
    | (df.Origin == "LAX") | (df.Origin == "LGA") \
    | (df.Origin == "SLC") | (df.Origin == "FLL") ]

#creating df with 10 most popular destination locations
df = df[(df.Dest == "OGG") | (df.Dest == "ATL") \
    | (df.Dest == "LAX") | (df.Dest == "LAS") \
    | (df.Dest == "DEN") | (df.Dest == "ORD") \
    | (df.Dest == "LIH") | (df.Dest == "KOA") \
    | (df.Dest == "MCO") | (df.Dest == "FLL") ]

#resetting index because of previous dropped rows
df.reset_index(drop=True, inplace=True)

df.isnull().values.any()

df = df[["Month", "DayofMonth", "DayOfWeek", "Origin", "Dest", "CRSDepTime", "ArrDel15"]]
df.isnull().sum()

df['ArrDel15'] = df['ArrDel15'].fillna(1)

for index, row in df.iterrows():
    df.loc[index, 'CRSDepTime'] = math.floor(row['CRSDepTime'] / 100)

df = pd.get_dummies(df, columns=['Origin', 'Dest'])

train_x, test_x, train_y, test_y = train_test_split(df.drop('ArrDel15', axis=1), df['ArrDel15'], test_size=0.2, random_state=40)

model = RandomForestClassifier(random_state=13)
model.fit(train_x, train_y)

predicted = model.predict(test_x)
model.score(test_x, test_y)

probabilities = model.predict_proba(test_x)

confusion_matrix(test_y, predicted)

train_predictions = model.predict(train_x)
precision_score(train_y, train_predictions)

recall_score(train_y, train_predictions)

# print(predict_delay('1/10/2018 21:45:00', 'DEN', 'ATL'))
print(predict_delay(sys.argv[1], sys.argv[2], sys.argv[3]))