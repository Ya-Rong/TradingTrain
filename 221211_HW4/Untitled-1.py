# %%
import requests 
import json
import time
import logging

# %%
# Logging initial settings
logging.basicConfig(filename='try5.log', encoding='utf-8', level=logging.DEBUG)

# get web data
num = 0
data = []
page = 0

while num < 300:
# (check data length)

    page = page + 1
    # print(page)
    logging.debug(f'Scraping page {page}')
    # f:format, 將資料格式化

    # import url
    url = f'https://ecshweb.pchome.com.tw/search/v3.3/all/results?q=%E7%AD%86%E9%9B%BB&page={page}&sort=sale/dc'

    a = requests.get(url)
    result = a.json()
    
    data.append(result['prods'])
    num += 20

    # col.insert_many(result['prods'])

    time.sleep(0.5)

# for page in range(1,11):
#     url = f'https://ecshweb.pchome.com.tw/search/v3.3/all/results?q=%E7%AD%86%E9%9B%BB&page={page}&sort=sale/dc'

#     a = requests.get(url)
#     result = a.json()
#     temp_result = result['prods']

#     data.append(result['prods'])

#     col.insert_many(result['prods'])
#     for i in temp_result:
#         num.append(i['price'])


# %%
data

# %%
data

# %%
print(*data, sep = ',')

# %%
# clean data
remove = ['cateId','picS','picB','describe','author','brand','sellerId','isPChome','isNC17','couponActid','BU']

for prods in data:
    for key in remove:
        data.pop(key, None)

# %%
from pymongo import MongoClient

# %%
# connect pymongo
client = MongoClient("mongodb://localhost:27017")
# connect Database
db = client["HW4"]
# connect collection
col = db["try5"]

# %%
# insert many
# save to mongodb
# 還是只能存一頁資料，但前面可輸出全部資料
# col.insert_many(data)

# %%
num = 0
data = []
page = 0

while num <= 300:
# (check data length)

    page = page + 1
    print(page)

    # import url
    url = f'https://ecshweb.pchome.com.tw/search/v3.3/all/results?q=%E7%AD%86%E9%9B%BB&page={page}&sort=sale/dc'

    # get web data
    a = requests.get(url)
    result = a.json()
    
    data.append(result['prods'])
    num += 20

    col.insert_many(result['prods'])

    time.sleep(0.5)


