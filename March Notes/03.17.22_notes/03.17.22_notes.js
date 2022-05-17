//? What is an array?
//! An array is a sequence of elements of the same type stored in a contiguous block of memory
//! Optimally space-efficient way to store data, packed side-to-side with no wasted memory

//? Accessing an array value at an index:
//! valueAddress = startAddress + index * sizeof(DataType)

//? Big o for array:
//! If array is fixed size, it is O(1)
//! If array is dynamic (changes) size, it is O(n)

//? Big o for built-in functions
//! push() is O(1)
//! pop() is O(1)
//! size() is O(1)
//! unshift() O(n) 
//! splice() is O(n)

//? Call stack:
//! Stack frame: location for state of each function to be stored that contains the function's local variables
//! and the state of execution

//! Call stack: Frames are stored in LIFO order in a portion of memory

// Recursive function have a minimum space complexity of O(n) where n is the depth of calls
// - If call stack grows too  deep, it will cause stack overflow error
// --> Better to use iterative than recursion solution when n is large and space is an issue

//? Describe computer memory in 100 words or less.
//! Processor (CPU) does the thinking; Video card (GPU) does the drawing; 
//! Memory card(RAM) is the space to be written on; hard drive(HDD) is the storage around the desk that we keep stuff in
//! Motherboard is the room that keep things together
//! ==> Storage space where data is processed and instructions required for processing are stored
