with open("teste.txt") as f:
    content = f.read().splitlines()

num_draw = content[0].split(",")

puzs = []

for i in content[1:]:
    if i != '':
        linepuz = i.split(" ")
        print(linepuz)
        puzs.append(linepuz.remove(""))

print(puzs)

#print(num_draw)