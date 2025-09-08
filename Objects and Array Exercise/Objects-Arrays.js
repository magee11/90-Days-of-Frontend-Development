const Data = {
    "users": [
      {
        "id": 1,
        "name": "Alice",
        "age": 25,
        "skills": ["React", "Node.js", "MongoDB","Nextjs"],
        "address": {
          "city": "Bengaluru",
          "pincode": 560001
        },
        "isActive": true
      },
      {
        "id": 2,
        "name": "Bob",
        "age": 30,
        "skills": ["Python", "Django", "AWS"],
        "address": {
          "city": "Chennai",
          "pincode": 600001
        },
        "isActive": false
      },
      {
        "id": 3,
        "name": "Charlie",
        "age": 28,
        "skills": ["Java", "Spring Boot", "MySQL"],
        "address": {
          "city": "Hyderabad",
          "pincode": 500001
        },
        "isActive": true
      }
    ],
    "company": {
      "name": "TechCorp",
      "departments": ["Engineering", "HR", "Finance"],
      "locations": ["India", "USA", "Germany"]
    }
  }
  
  
  // 1. Get all user names in an array.
  let userNames = Data["users"].map(users=>users.name)
  console.log("All User Names:", userNames)
  // All User Names: [ 'Alice', 'Bob', 'Charlie' ]
  
  
  
  // 2. Find all users above 27 years old
  let userAbove27 = Data["users"].filter(user=>user.age>27).map(users=>users.name);
  console.log("Users above 27:", userAbove27)
  // Users above 27: [ 'Bob', 'Charlie' ]
  
  
  
  // 3. Return only active users.
  let isUserActive = Data["users"].filter(users=>users["isActive"]).map(item=>item.name)
  console.log("Active Users:", isUserActive)
  // Active Users: [ 'Alice', 'Charlie' ]
  
  
  
  // 4. Count how many skills each user has.
  let usersSkills = Data["users"].map((item)=>{ return {[item.name] : item.skills.length}})
  console.log("Skill Count per User:", usersSkills);
  // Skill Count per User: [ { Alice: 4 }, { Bob: 3 }, { Charlie: 3 } ]
  
  
  
  // 5. Create an array of all unique skills across users.
  let skills = Data["users"].flatMap(item=>item.skills);
  console.log("All Skills:", skills);
  // All Skills: [ 'React', 'Node.js', 'MongoDB', 'Nextjs', 'Python', 'Django', 'AWS', 'Java', 'Spring Boot', 'MySQL' ]
  
  
  
  // 6. Extract all cities from user addresses.
  let addresses = Data["users"].flatMap((item)=>item.address.city)
  console.log("User Cities:", addresses);
  // User Cities: [ 'Bengaluru', 'Chennai', 'Hyderabad' ]
  
  
  
  // 7. Find the user who lives in "Chennai".
  let chennaiUser = Data["users"].filter((item)=>item.address.city==="Chennai")[0].name;
  console.log("User in Chennai:", chennaiUser);
  // User in Chennai: Bob
  
  
  
  // 8. Add a new property role: "Developer" to every user.
  let newValues = Data["users"].map((item)=>({
      ...item,
      role:"Developer"
  }))
  console.log("Users with Role:", newValues)
  // Users with Role: [
  //   { id: 1, name: 'Alice', age: 25, skills: [ 'React', 'Node.js', 'MongoDB', 'Nextjs' ], address: { city: 'Bengaluru', pincode: 560001 }, isActive: true, role: 'Developer' },
  //   { id: 2, name: 'Bob', age: 30, skills: [ 'Python', 'Django', 'AWS' ], address: { city: 'Chennai', pincode: 600001 }, isActive: false, role: 'Developer' },
  //   { id: 3, name: 'Charlie', age: 28, skills: [ 'Java', 'Spring Boot', 'MySQL' ], address: { city: 'Hyderabad', pincode: 500001 }, isActive: true, role: 'Developer' }
  // ]
  
  
  
  // 9. Update isActive to true for "Bob".
  let updateBob = Data["users"].filter(item=>item.name==="Bob").map(item=>({
      ...item,
      isActive:true
  }));
  console.log("Updated Bob:", updateBob)
  // Updated Bob: [
  //   { id: 2, name: 'Bob', age: 30, skills: [ 'Python', 'Django', 'AWS' ], address: { city: 'Chennai', pincode: 600001 }, isActive: true }
  // ]
  
  
  
  // 10. Delete "Finance" from company departments.
  Data.company.departments = Data.company.departments.filter((item)=>item !=="Finance")
  console.log("Updated Departments:", Data.company.departments);
  // Updated Departments: [ 'Engineering', 'HR' ]


  