// my solutions for the exercises presented during the Async JS lecture
// see the relevant question prompts here: https://jsbin.com/tadumucuge/edit?js,console,output

/////////////////
//             //
// CHALLENGE 1 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 1');
// ...your code below

console.log('i am at the beginning of the code');
setTimeout(() => console.log('I am in the setTimeout callback func'), 3000)
console.log('I am at the end of the code');

console.log('End of Challenge 1');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 2 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 2');
// ...your code below
const intervalId = setInterval(() => console.log('Interval Hello!'), 2000);
setTimeout(() => clearInterval(intervalId), 10000)




// ...your code above
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}
console.log('End of Challenge 2');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 3 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 3');
// ...your code below

const everyXsecsForYsecs = (func, interval, total) => {
  const intervalId = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(intervalId), total * 1000)
}

const sayHowdy = () => console.log('Howdy');

everyXsecsForYsecs(sayHowdy, 1, 5);

const manualSetInterval = (func, interval, total) => {
  for (let i = 0; i < Math.floor(total / interval); i++) {
    setTimeout(func, interval * 1000);
  }
}

manualSetInterval(sayHowdy, 1, 5);

console.log('End of Challenge 3');
// */// (do not alter this line)




/////////////////
//             //
// CHALLENGE 4 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 4');
// ...your code below
const forEach = (arr, cb) => {
  for (const item of arr) {
    cb(item, arr.indexOf(item));
  }
}

const delays = [2000, 5000, 0, 3500];

const delayLog = (delayTime, i) => {
  setTimeout(() => console.log(`printing element ${i}`), delayTime)
}

forEach(delays, delayLog);



console.log('End of Challenge 4');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 5 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 5');
// ...your code below

const changeColor = () => {
  if (document.body.style.background === 'rgb(221, 238, 255)') {
    document.body.style.background = 'rgb(255, 238, 221)';
  } else {
    document.body.style.background = 'rgb(221, 238, 255)';
  }
}

document.body.querySelector('#activate').addEventListener('click', () => {
  console.log('clicked #1');
  document.body.querySelector('#color').addEventListener('click', () => {
    console.log('clicked #2');
    changeColor();
  })
})


// ...your code above
document.body.style.background = '#def';
console.log('End of Challenge 3');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 6 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 6');
var dataReceived;

function ajaxSimulate(id, callback) {
  var database = ['Aaron', 'Barbara', 'Chris'];
  setTimeout(callback(database[id]), 0);
}

const storeData = data => {
  dataReceived = data;
  console.log(dataReceived);
}
  
ajaxSimulate(1, storeData);
// the following throws an error!
// console.log(dataReceived);

console.log('End of Challenge 6');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 7 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 7');
// ...your code below
const myRequest = new Request('https://rest.bandsintown.com/artists/pixies?app_id=jshp');
fetch(myRequest)
  .then(res => res.json())
  .then(resJSON => {
    document.body.querySelector('#ch2').innerHTML = `<img src=${resJSON.image_url} />`       
  })
  .catch(err => console.log(err));
  




console.log('End of Challenge 7');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 8 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 8');
// ...your code below
const myRequest = new Request('https://rest.bandsintown.com/artists/pixies/events?app_id=jshp');
fetch(myRequest)
  .then(res => res.json())
  .then(resJSON => {
      let ourList = '<ul>';
      for (const event of resJSON) {
        ourList += `<li>${event.venue.name}</li>`;
      }
      ourList += '</ul>';
      document.querySelector('#ch3').innerHTML = ourList;
  })
  .catch(err => console.log(err));




console.log('End of Challenge 8');
// */// (do not alter this line)



/////////////////
//             //
// CHALLENGE 9 //
//             //
/////////////////

/* <<<=== Remove the first two slashes (//) to comment out this challenge when finished
console.log('Start of Challenge 9');
// ...your code below
const myRequest = new Request('https://rest.bandsintown.com/artists/pixies/events?app_id=jshp');
fetch(myRequest)
  .then(res => res.json())
  .then(resJSON => {
    let ourList = '<ul>';
    for (const event of resJSON) {
      if (event.venue.country === 'United Kingdom') {
        ourList += `<li>${event.venue.name}</li>`;
      }
    }
    ourList += '</ul>';
    document.querySelector('#ch3').innerHTML = ourList;
  })
  .catch(err => console.log(err));






console.log('End of Challenge 9');
// */// (do not alter this line)