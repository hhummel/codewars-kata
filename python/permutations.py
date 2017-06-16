#Solution for "Permutations" 4 kyu
#https://www.codewars.com/kata/5254ca2719453dcc0b00027d

def permutations(string):
    from itertools import permutations
    perm = permutations(list(string))
    set_ = set([''.join(p) for p in perm])
    list_ = list(set_)
    return sorted(list_)
