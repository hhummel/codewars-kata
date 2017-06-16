#Solution for "Consecutive strings" 6 kyu
#https://www.codewars.com/kata/56a5d994ac971f1ac500003e

def longest_consec(strarr, k):
    len_strarr = len(strarr)
    #Test the corner cases
    if (k < 1 or k > len_strarr):
        return ''
    max_str = ''
    max_len = 0
    #Loop over allwed start points and keep track of longest slice
    for i in range(len_strarr-k+1):
        #Take a candidate slice and make a string
        str_slice = strarr[i:i+k]
        str = ''.join(str_slice)
        str_len = len(str)
        #Check if it's the longest one seen
        if str_len > max_len:
            max_len = str_len
            max_str = str
    return max_str
