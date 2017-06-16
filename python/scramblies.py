#Solution for "Scramblies" 6 kyu
#https://www.codewars.com/kata/55c04b4cc56a697bb0000048

def scramble(s1,s2):
    from collections import defaultdict

    def make_dict(str):
        dict = defaultdict(int)
        for char in list(str):
            dict[char] += 1
        return dict
 
    dict1 = make_dict(s1)
    dict2 = make_dict(s2)

    for key in dict2.keys():
        if key not in dict1 or dict1[key] < dict2[key]:
            return False

    return True
