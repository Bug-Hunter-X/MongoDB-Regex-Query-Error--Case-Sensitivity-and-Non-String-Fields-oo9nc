# MongoDB Regex Query Error: Case Sensitivity and Non-String Fields
This repository demonstrates a common error in MongoDB queries using regular expressions: attempting to use regex on a non-string field and the case sensitivity default.  This can lead to unexpected errors and incorrect results.

The `bug.js` file shows the problematic code, and `bugSolution.js` provides a corrected version.

## Problem
The provided code uses a regex to find documents where a field matches a pattern. However, if the field is not a string or the case sensitivity needs to be changed it may result in an error or no results.

## Solution
The solution involves ensuring the field is of the String type and using the `$options` flag in regex to make it case insensitive and return all the relevant results. We also added error handling to make it more robust. 