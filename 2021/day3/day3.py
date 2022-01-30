# with open("teste.txt") as f:
#     content = f.read().splitlines()

# savecount=[]
# for i in range(len(content[0])):
#     savecount.append([0,0])


# for line in content:
    
#     for bit in range(len(line)):

#         if line[bit] == "0":
#             savecount[bit][0]+=1
#         elif line[bit] == "1":
#             savecount[bit][1]+=1

# grate = []
# erate = []

# for bit in range(len(savecount)):

#     if savecount[bit][0] > savecount[bit][1]:
#         grate.append("0")
#     else:
#         grate.append("1")
    

#     if savecount[bit][0] < savecount[bit][1]:
#         erate.append("0")
#     else:
#         erate.append("1")

# def binaryToDecimal(n):
#     return int(n,2)

# res = binaryToDecimal("".join(grate)) * binaryToDecimal("".join(erate))

# # print("".join(grate), "".join(erate))
# # print(binaryToDecimal("".join(grate)), binaryToDecimal("".join(erate)))
# print(res)

########################################################################################
def report(content):

    savecount=[]
    for i in range(len(content[0])):
        savecount.append([0,0])


    for line in content:
        
        for bit in range(len(line)):

            if line[bit] == "0":
                savecount[bit][0]+=1
            elif line[bit] == "1":
                savecount[bit][1]+=1

    return savecount

with open("teste.txt") as f:
        content = f.read().splitlines()
rep = report(content)

def ograte(savecount, content):
    grate = []
    #erate = []
    lim = float("inf")

    for bit in range(len(savecount)):

        if savecount[bit][0] > savecount[bit][1] and savecount[bit][0] < lim:
            #grate.append("0")
            c = 0
            found =0
            lim = savecount[bit][0]
            while c < len(content) and found < lim:
                
                if content[c][bit] == "0":
                    grate.append(content[c])
                    found+=1
                
                c+=1
                
        elif savecount[bit][0] <= savecount[bit][1] and savecount[bit][1] < lim:
            #grate.append("1")
            c = 0
            found =0
            lim = savecount[bit][1]
            while c < len(content) and found < lim:
                
                if content[c][bit] == "1":
                    grate.append(content[c])
                    found+=1
                c+=1
        
        else:
            c = 0
            found =0
        
        content = grate
        print(content)
    return grate

print(ograte(rep, content))

#     if savecount[bit][0] < savecount[bit][1]:
#         erate.append("0")
#     else:
#         erate.append("1")

# def binaryToDecimal(n):
#     return int(n,2)

# res = binaryToDecimal("".join(grate)) * binaryToDecimal("".join(erate))

# print("".join(grate), "".join(erate))
# print(binaryToDecimal("".join(grate)), binaryToDecimal("".join(erate)))
#print(res)

#######################################################################################

# rep, content, lim= report("teste.txt")

# #print(rep, content, lim)

# state = []
# for line in rep:

#     if line[0] > line[1] and lim[0] >= 1 and line[0]<= lim[0]:
#         lim = line[0]
#         for num in range(line[0]):
#             if content[num][rep.index(line)] == "0":
#                 state.append(content[num])

#     if line[0] < line[1] and lim[0] >= 1 and line[1] <= lim[0]:
#         lim = line[1]
#         for num in range(line[1]):
#             if content[num][rep.index(line)] == "1":
#                 state.append(content[num])
    
#     print(lim, state)
