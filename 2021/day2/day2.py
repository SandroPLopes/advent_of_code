# with open("input.txt") as f:
#     content = f.read().splitlines()

# depth=0
# horiz=0

# for line in content:

#     cmd = line.split()[0]
#     x = line.split()[1]

#     if(cmd == "forward"):
#         horiz+=int(x)

#     if(cmd == "up"):
#         depth-=int(x)

#     if(cmd == "down"):
#         depth+=int(x)

# res = horiz * depth

# print(res)

###################################################

with open("input.txt") as f:
    content = f.read().splitlines()

depth=0
horiz=0
aim = 0

for line in content:

    cmd = line.split()[0]
    x = line.split()[1]

    if(cmd == "forward"):
        horiz+=int(x)
        depth+=(aim*int(x))

    if(cmd == "up"):
        aim-=int(x)

    if(cmd == "down"):
        aim+=int(x)

res = horiz * depth

print(res)