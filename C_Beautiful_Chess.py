n = int(input())

for x in range(n):

    result = []
    for x in range(9):
        result.append(input())

    
    result.pop(0)
    started = False
    counts = []
    for index,xx in enumerate(result):
        if '#' in xx:
            counts.append(xx.count('#'))
        
        if len(counts) >= 2 and counts[-2] == 2 and (index != 0 and index != 7) and xx.count('#') == 1:
            
            if xx.index('#') not in [0, 7]:
                
                print(str(index + 1), str(xx.index('#') + 1)) 
                break