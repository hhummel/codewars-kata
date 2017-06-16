#Solution for "Supermarket Queue" 6 kyu
#https://www.codewars.com/kata/57b06f90e298a7b53d000a86

def queue_time(customers, n):
     #No customers, no time
     if len(customers) == 0:
         return 0
     #If there are more tills than customers, the longest customer it rate limiting    
     if len(customers) <= n:
         return max(customers)
         
     #Helper function for recursion.  Has to keep track of state of tills and elapsed time.
     #The idea is to make an incrementally easier problem, (one fewer customers), until there's
     #an easy terminal case, (no customers left in queue).
     def customers_tills(customers, tills, total_time):
         #Terminal case when queue is empty.  Customers still at tills, so answer is the
         #time it took to get to this state plus the remaining time needed to serve the longest customer
         if len(customers) == 0:
             answer = total_time + max(tills)
             return answer
         #Still customers in queue, so...    
         else:
             #Find which customer at tills wil be done first...
             min_till = min(tills)
             min_index = tills.index(min_till)
             #Decrement time for all the customers at till by that amount...
             new_tills = [till - min_till for till in tills]
             #Take next cusotmer from queue and send her to that till...
             new_tills[min_index] = customers[0]
             #Increment total time for the time to service the departing customer...
             new_total = total_time + min_till
             #Call the recursive function with remaining customers, reset till 
             #and new total time.  There has to be a return so the answer from the
             #terminal case will bubble up from the stack of fucntion calls.
             #This form would be tail recursive if python had that, like Scala and ES6 do.
             return customers_tills(customers[1:], new_tills, new_total)
             
     #Start the process by assigning the first n customers to tills.  No time
     #has elapsed yet, so the time is zero.  The recursion works one customer at
     #a time, so I need this set up step
     return customers_tills(customers[n:], customers[:n], 0) 
  
