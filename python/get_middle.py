#Solution for "Get Middle Character" 7 kyu
#https://www.codewars.com/kata/56747fd5cb988479af000028

def get_middle(s):
    length = len(s)
    odd = length % 2
    half = length / 2
    return s[half-1+odd:half+1] 
