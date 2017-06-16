#Solution for "Maximum subarray sum" 5 kyu
#https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

def maxSequence(arr):
    #If the arr is empty, return an empty subarray
    if len(arr) == 0:
        return 0
    #Start from the right hand side and find the largest subarray for each position
    #Reverse the initial array so it's easier to manage
    rev_arr = arr[::-1]
    sub_arr = []
    for index, element in enumerate(rev_arr):
        #The largest subarray for position 0 in rev_arr is just an array of that element
        if index == 0:
            sub_arr.append(rev_arr[index])
        else:
            #For all other positions, the largest subarray is either an array of just that element, 
            #or an array of that element and the largest subarray of it's left hand neighbor 
            #in the reversed list
            sub_arr.append(rev_arr[index] + max(sub_arr[index-1], 0)) 
                
    return max(sub_arr) 
