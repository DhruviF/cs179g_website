import csv
from queue import Empty
import pyodbc
import copy
server = 'LAPTOP-A3DJ90N5\MSSQLSERVER01'
database = 'cs179G'
username = 'group7'
password = 'group7'
cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
crsr = cnxn.cursor()

for i in range(0,77):
    if(i < 10):
        fileName = 'AllFlightsSearchBar/part-0000' + str(i) + '-18bdee67-b907-4679-b375-8e88743c42fb-c000.csv'
    else:
        fileName = 'AllFlightsSearchBar/part-000' + str(i) + '-18bdee67-b907-4679-b375-8e88743c42fb-c000.csv'
    with open(fileName, newline = '') as csvfile:
        num = 0
        i = 0
        flag = False
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        for row in reader:
            i+=1
            if(i == 1):
                continue
            else:
                for j in range(len(row)):
                    if(row[j] == ''):
                        flag = True
                    try:
                        row[j] = copy.deepcopy(row[j].replace("\"",''))
                    except:
                        continue
                    try:
                        if (row[j][0] == ' '):
                            row[j] = copy.deepcopy(row[j][1:])
                    except:
                        continue
            if(flag == True):
                flag = False
                continue
            if(len(row) > 17):#if the airline had a comma
                row[0] = copy.deepcopy(row[0] + row[1])
                #year airline origin dest deppTime ArrTime Month dayofMonth originCity originState destCity DestState depDel15 Arrdel15 ifDelayed
                params = (int(row[7]), row[0], row[2], row[3], float(row[4]), float(row[5]), float(row[6]), int(row[8]), 
                int(row[9]), row[9], row[12], row[13], row[14], float(row[15]), float(row[16]), int(row[17]))

            else:
                params = (int(row[6]), row[0], row[1], row[2], float(row[3]), float(row[4]), float(row[5]), int(row[7]), 
                int(row[8]), row[9], row[11], row[12], row[13], float(row[14]), float(row[15]), int(row[16]))
            crsr.execute("{call insertFlightSearchBar(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}", params)

cnxn.commit()

