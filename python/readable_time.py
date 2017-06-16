#Solution to "Human Readable Time" 5 kyu
#https://www.codewars.com/kata/52685f7382004e774f0001f7

def make_readable(seconds):
    sec_hour = 3600
    sec_min = 60 
    hours = seconds // sec_hour
    hours_remainder = seconds % sec_hour
    min = hours_remainder // sec_min
    sec = hours_remainder % sec_min
    return "%02d:%02d:%02d" % (hours, min, sec)
