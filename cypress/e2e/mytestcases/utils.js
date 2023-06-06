export const generateRandomName = () =>{
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emma",
      "David",
      "Olivia",
      "Daniel",
      "Sophia",
      "Matthew",
      "Isabella",
      // Add more first names as needed
    ];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    console.log("First Name"+randomFirstName)
  
    return randomFirstName;
  }

  export const generateLastName =() =>{
    const lastNames = [
        "Smith",
        "Johnson",
        "Brown",
        "Taylor",
        "Miller",
        "Wilson",
        "Davis",
        "Clark",
        "Walker",
        "White",
        // Add more last names as needed
      ];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      console.log("First Name"+randomLastName)
      return randomLastName;
      
  }

  export const generateRandomEmail =() => {
    const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "example.com", "test.com"];
    const emailPrefixes = ["john", "jane", "mike", "emma", "david", "olivia", "testuser", "example"];
  
    const randomPrefix = emailPrefixes[Math.floor(Math.random() * emailPrefixes.length)];
    const randomDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  
    const randomNumber = Math.floor(Math.random() * 10000);
    const randomEmail = randomPrefix + randomNumber + "@" + randomDomain;
  
    return randomEmail;
  }