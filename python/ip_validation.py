#Solution for "IP Validation" 4 kyu
#https://www.codewars.com/kata/515decfd9dcfc23bb6000006

import re

def is_valid_IP(strng):
    match_obj = re.match(r'^([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)\.([1-9]\d{0,2}|0)$', strng)
    if (match_obj is None or 
        int(match_obj.group(1)) > 255 or
        int(match_obj.group(2)) > 255 or 
        int(match_obj.group(3)) > 255 or 
        int(match_obj.group(4)) > 255):
        return False
    return True
