#Solution for "Simple Pig Latin" 5 kyu
#https://www.codewars.com/kata/520b9d2ad5c005041100000f

def pig_it(text):
    #Helper to keep list comprehension simple
    def latinize(string):
        #Treat '!' or '?' differently from normal rule
        if string == '?' or string == '!':
            return string
        arr = list(string)
        new_arr = arr[1:] + arr[:1]
        new_str = ''.join(new_arr) + "ay"
        return new_str
        
    ans = [latinize(string) for string in text.split()]
    return ' '.join(ans)
