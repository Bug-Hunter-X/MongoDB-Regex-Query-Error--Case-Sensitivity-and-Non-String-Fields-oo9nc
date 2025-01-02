```javascript
const query = { field: { $regex: /pattern/i } }; //Added /i flag for case-insensitive match

try {
  const result = await collection.find(query).toArray();
  console.log(result);
} catch (error) {
  console.error('Error executing MongoDB query:', error);
  // Add more specific error handling if needed
}
```