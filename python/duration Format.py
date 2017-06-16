#Solution for "Human readable duration format" 4 kyu
#https://www.codewars.com/kata/52742f58faf5485cae000b9a

def format_duration(seconds):
    if seconds == 0:
        return "now"

    second = 1
    minute = 60 * second
    hour = 60 * minute
    day = 24 * hour
    year = 365 * day
    remainder = seconds
    times = [(year, "year"), (day, "day"), (hour, "hour"), (minute, "minute"), (second, "second")]
    result = []

    for time in times:
        remainder, str = snippet(remainder, time[0], time[1])
        if str:
            result.append(str)
    
    if len(result) == 1:
        return result[0]

    return ", ".join(result[:-1]) + " and " + result[-1]

def snippet(remainder, period, name_str):
    value = remainder / period
    string_ = ""
    if value == 1:
        string_ = "1 " + name_str
    if value > 1:
        string_ = str(value) + " " + name_str + "s"
    next_remainder = remainder % period
    return next_remainder, string_
