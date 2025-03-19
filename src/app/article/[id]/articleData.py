import requests
from bs4 import BeautifulSoup
import json
import copy
from urllib.parse import urljoin
url='https://www.ea.com/ja/games/apex-legends/apex-legends/news/dev-update-0225'
# ウェブページの内容を取得
response = requests.get(url)
response.raise_for_status()  # エラーチェック

# BeautifulSoupを使ってHTMLを解析
soup = BeautifulSoup(response.text, 'html.parser')

# ページのタイトルを取得
title = soup.title.string
print(f"ページのタイトル: {title}")

#記事の全体を取得
full_text = soup.get_text(strip=True)
print("ページ全体のテキスト:", full_text)
original_data={'full_text':full_text}
cloned_data=copy.deepcopy('original_data')

with open ('cloned_data.json','w',encoding='utf-8') as json_file:
    json.dump(cloned_data,json_file,indent=4,ensure_ascii=False)
# すべてのリンクを取得
links = soup.find_all('a')
for link in links:
    href = link.get('href')
    print(href)
    if href:
        full_url=urljoin(url,href)
        print(full_url)