from urllib.request import urlopen
from bs4 import BeautifulSoup

# html = urlopen("https://college.gist.ac.kr/prog/gsPerson/college/P/list.do?gubunName=Faculty&mno=sub03_01_01_02_01") # 기초교육학부
# html = urlopen("https://life.gist.ac.kr/prog/gsMember/life/P/list.do?gubunName=Faculty&mno=sub05_01_01") # 생명과학부
# html = urlopen("https://eecs.gist.ac.kr/prog/gsMember/eecs/P/list.do?gubunName=PROFESSOR&mno=sub05_01_01") # 전기전자컴퓨터공학부
html = urlopen("https://env1.gist.ac.kr/prog/gsMember/env1/ALL/list.do?mno=sub03_01") # 지구환경공학부
# html = urlopen("https://me.gist.ac.kr/prog/gsMember/me/P/list.do?gubunName=FACULTY&mno=sub05_01_01") # 기계공학부
# html = urlopen("https://mse.gist.ac.kr/prog/gsMember/mse/P/list.do?mno=sub05_01") # 신소재공학부
# html = urlopen("https://chem.gist.ac.kr/prog/gsMember/chem/P/list.do?gubunName=Faculty&mno=sub05_01_01") # 화학과
# html = urlopen("https://phys.gist.ac.kr/prog/gsMember/phys/P/list.do?gubunName=Faculty&mno=sub05_01_01") # 물리광과학과

bsObject = BeautifulSoup(html, "html.parser")

for card in bsObject.find_all("div", {"class": "card--body"}) :

    strong = card.find("strong")
    name = strong.get_text()
    name = name.strip()
    name = name.replace("(", " ")
    name = name.replace("[", " ")
    names = name.split()
    name = names[0]
    print(name)

    email = ""
    tel = ""
    office = ""

    category = ""
    content = ""
    for li in card.find_all("li") :
        category = li.find("b")
        content = li.find("i")
        # None return case Error Handling
        if category is None:
            continue
        if content is None:
            continue
        category = category.get_text()
        content = content.get_text()

        if category == "E-MAIL" :
            email = content
        elif category == "TEL" :
            tel = content
        elif category == "OFFICE" :
            office = content
        # print(category, end=" ")
        # print(content)

    print(email + " " + tel + " " + office)