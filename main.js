// setTimeout function makes the code asychronous as the code does not wait until the
// this function finishes running
// setTimeout(() => {
//   console.log('coffee');
// }, 3000);

// console.log('toast');
// console.log('eggs');

// const names = ['josh', 'mary', 'bob'];

// const greet = names.map((name) => `Hello ${name}`);

// console.log(greet);

const greeting = (name) => console.log(`hello ${name}`);

// greeting('john');

const userInfo = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
};

userInfo('john', 'doe', greeting);

// Promises
const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Marketing Meeting',
      location: 'Skype',
      time: '1:00 PM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled'));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled at 
                      ${meetingDetails.time} on 
                      ${meetingDetails.location}`;
  return Promise.resolve(calendar);
};

// meeting
//   .then(addToCalendar)
//   .then((res) => {
//     // resolve data
//     console.log('Meeting scheduled');
//     console.log(res);
//   })
//   .catch((err) => {
//     // reject data
//     console.log(err.message);
//   });

const myMeeting = async () => {
  try {
    const meetingDetails = await meeting;
    const message = await addToCalendar(meetingDetails);
    console.log(message);
  } catch (error) {
    console.log(error.message);
  }
};

// myMeeting().catch((err) => console.log(err.message));
myMeeting();
