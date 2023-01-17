n = int(input())

for x in range(n):
    result = []
    nn = int(input())
    for x in range(nn):
        result.append(input())
    
    nine = []
    one = []
    two = []
    result = 0
    for x in range(len(result)):
        aa = ""
        for y in range(len(result)):
            aa.append(result[y][x])
        nine.append([aa.count(0), a)