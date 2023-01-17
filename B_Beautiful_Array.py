n = int(input())

second = list(map(int, input().split()))

negative = []
positive = []
zero = []
for x in second:
    if x < 0:
        negative.append(x)
    elif x > 0:
        positive.append(x)
    else:
        zero.append(0)

if not len(negative) % 2:
    zero.append(negative[-1])
    negative.pop()

positive = list(map(str,list(set(positive))))
negative = list(map(str, list(set(negative))))
zero = list(map(str,list(set(zero))))

print(str(len(negative)), ' '.join(negative))
print(str(len(positive)), ' '.join(positive))
print(str(len(zero)),' '.join(zero))
if not positive:
    positive.append(negative.pop())
    positive.append(negative.pop())