const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem => console.log(profileItem)); 
};

printProfileData(profileDataArgs);