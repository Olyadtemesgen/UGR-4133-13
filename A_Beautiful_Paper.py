n = int(input())

for x in range(n):
    i1 = list(map(int, input().split()))
    i2 = list(map(int, input().split()))
   
    returned = False
    counter = 0
    if not returned:
        for x in range(2):
            for y in range(2):
                if i1[x] == i2[y]  and y == 1 and i1[x] == i1[x - 1] + i2[y - 1]:
                    returned = True
                    print('Yes')
                    break
                elif i1[x] == i2[y] and y == 0 and (i1[x] == i1[x - 1] + i2[y + 1]):
                    print('Yes')
                    returned = True
                    break
            if returned:
                break
                
    if not returned:
        print('No')