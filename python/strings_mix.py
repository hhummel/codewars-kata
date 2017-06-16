#Solution for "Strings Mix" 4 kyu
#https://www.codewars.com/kata/5629db57620258aa9d000014

import re
from collections import defaultdict
from operator import itemgetter

def mix(s1, s2):
    dict1, set1 = process(s1)
    dict2, set2 = process(s2)
    union_set = set1.union(set2)
    mixed = [combine(key, dict1[key], dict2[key]) for key in union_set]
    filtered = [tup for tup in mixed if tup[1] > 1]
    sorted_2 = sorted(filtered, key=itemgetter(2))
    sorted_1 = sorted(sorted_2, key=itemgetter(1), reverse=True)
    return "/".join([tup[2] for tup in sorted_1]) 
       
def process(string):
    dict = defaultdict(int)
    set_ = set()
    list_ = list(string)
    for s in list_:
        match_obj = re.match("[a-z]", s)
        if match_obj:
            dict[s] += 1
            set_.add(s)
    return dict, set_ 

def combine(letter, v1, v2):
     count = max(v1, v2)
     if v1 > v2:
         cond = '1'
     elif v1 < v2:
         cond = '2'
     else:
         cond = '='
     return (letter, count, cond + ":" + letter * count)
