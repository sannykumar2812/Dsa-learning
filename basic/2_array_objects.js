/*   https://cs.slides.com/colt_steele/built-in-data-structures-30*/

/*
# When to use objects
- When you don't need order
- When you need fast access / insertion and removal

Insertion -   O(1)
Removal -   O(1)
Access -   O(1)
Searching -   O(N)

When you don't need any ordering, objects are an excellent choice!

# Big O of Object Methods
Object.keys -   O(N)
Object.values -   O(N)
Object.entries -   O(N)
hasOwnProperty -   O(1)
---------------------------------------------------------------------------
# WHEN TO USE ARRAYS
- When you need order
- When you need fast access / insertion and removal (sort of....)

Insertion -   It depends....
Removal -   It depends....
Access -   O(1)
Searching -   O(N)


# Big O of Array Operations
push -   O(1)
pop -   O(1)
shift -   O(N)
unshift -   O(N)
concat -   O(N)
slice -   O(N)
splice -   O(N)
sort -   O(N * log N)
forEach/map/filter/reduce/etc. -   O(N)

*/
