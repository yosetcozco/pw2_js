#!/usr/bin/python3
#WARNING!
#Do not forget check your own path for python3!
import json
import cgi
import sqlite3

form = cgi.FieldStorage() 
#name = form.getvalue('name')
name = 'Ford' #only for testing

conn = sqlite3.connect('imdb.db')
cur = conn.cursor()
sql = "SELECT * FROM Actor WHERE Name like '%" + name + "%'"
#print(sql)
data = []
for row in cur.execute(sql):
  data.append({
    'id': row[0],
    'name': row[1]
    })
conn.close()
print("Content-Type: application/json\n\n")
rt_data = json.dumps(data)
print(rt_data)