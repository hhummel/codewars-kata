#Solution to "Alphabetic anagrams" 3 kyu
#https://www.codewars.com/kata/53e57dada0cb0400ba000688

def listPosition(word):
  """Return the anagram list position of the word"""
  _list = list(word)
  count = [sublist(_list[i:]) for i in range(len(_list))]
  return sum(count) + 1

def sublist(word):
    if len(word) == 1:
        return 0
    lead = set([w for w in word if w < word[0]])
    count = []
    for l in lead:
        lag = list(word)
        lag.remove(l)
        count.append(multinomial(lag))
    return sum(count)

def multinomial(list):
    """Brittle, but len(list) <= 25""" 
    from collections import defaultdict
    from math import factorial

    dict = defaultdict(int)
    for l in list:
        dict[l] += 1
    length = len(list)
    result = factorial(length)
    for value in dict.values():
        result //= factorial(value)
    return result
