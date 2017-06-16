#Solution for "Largest Numeric Palindrome"
#https://www.codewars.com/kata/556f4a5baa4ea7afa1000046

def numeric_palindrome(*args):
    import numpy as np
    from itertools import combinations
    best = 0
    for l in range(2, len(args) + 1):
        current = max([ palindrome(product(i)) for i in combinations(args, l)]) 
        best = max(best, current)
    return best

def palindrome(num):
    from collections import Counter
    counter = Counter(list(str(num)))
    counts = []
    for i in range(10):
        counts.append(counter[str(i)])
    middle = False
    front = []
    for i in range(9, -1, -1):
        n = counts[i]
        if n:
            while n - 2 >= 0:
                front.append(i)
                n -= 2
            if middle == False and n == 1:
                middle = i
    #Can have leading 0
    if front == [0]:
        front = []
    back = front[::-1]
    if middle is not False:
        front.append(middle)
    result = [str(i) for i in front + back]
    result_str = ''.join(result)
    return int(result_str)

def product(arr):
    prod = 1
    for a in arr:
        prod *= a;
    return prod
