#Solution for "Equal Sides of an Array" 6 kyu
#https://www.codewars.com/kata/5679aa472b8f57fb8c000047

def find_even_index(arr):
    len_arr = len(arr)
    #Test to see if array has at least 2 elements
    if len_arr < 2:
        return -1
    #Set up left had case.  Sum to left of element 0 is zero.
    left_sum = 0
    right_sum = sum(arr[1:])
    if left_sum == right_sum:
        return 0
    #Check remaining cases.  Avoid resumming by adding/excluding elements at index
    for i in range(len_arr-1):
        left_sum = left_sum + arr[i]
        right_sum = right_sum - arr[i+1]
        if left_sum == right_sum:
            return i + 1
      #Failed to find result      
    return -1
