#Solution for "Pascal's Triangle #2" 5 kyu
#https://www.codewars.com/kata/52945ce49bb38560fe0001d9

def pascal(p):
    cache = {}

    def get_pascal(p):
        if p not in cache:
            if p == 1:
                cache[p] = [1]
            else:
                old_list = get_pascal(p-1)
                cache[p] = [1] + [i + j for i, j in zip(old_list, old_list[1:])] + [1]       
        return cache[p]

    return [get_pascal(i+1) for i in range(p)]
