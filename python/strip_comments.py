#Solution to "Strip comments" 4 kyu
#https://www.codewars.com/kata/51c8e37cee245da6b40000bd

import re

def solution(string, markers):
    if not markers:
        return string
    #Escape markers so regex special characters allowed in string
    escaped = [re.escape(m) for m in markers]
    match_str ="^([^" + "".join(escaped) + "]*)" 
    marker_str = "[" + "|".join(escaped) + "]*.*$"
    regex_str = match_str + marker_str 

    string_arr = string.split("\n")
    #Split adds a trailing '' if '\n' is at end of string
    strings = string_arr[:-1] if len(string_arr) > 1 and string_arr[-1] == '' else string_arr[:]

    solution = [re.match(regex_str, str, re.UNICODE).group(1).strip() for str in strings if re.match(regex_str, str, re.UNICODE)]
    return "\n".join(solution)
