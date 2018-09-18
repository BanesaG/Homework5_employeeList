const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

let command = '';
let inputName;

const runCommand = function(){
  let userName;
  switch (command){
    case 'print':
    printAll();
    break;
  {
    case 'verify':
    print()
    break;
  }
  {
    case 'lookup'
    print()
    break;
  }
  {
    case 'contains'
    print()
    break;
  }
  {
    case 'add'
    print()
    break;
  }
  {
    case 'update'
    print()
    break;
  }
  {
    case 'delete'
    print()
    break;    
  }
}

const printAll = function(){
  for (let i = 0; i < employeeList.length; i++) {
       render(`${employeeList[i].name}`);
       render(`#${employeeList[i].officeNum}`);
       render(`${employeeList[i].phoneNum}`);
       breakLine();
   }
}

const print = function(i){
  render(`${employeeList[i].name}`);
  render(`#${employeeList[i].officeNum}`);
  render(`${employeeList[i].phoneNum}`);
  breakLine();
}

const render = function(str){
  $('#content').append(str);
}

const empty = function(){
  $('#content').html('');
}

const breakLine = function(){
  document.getElementById('content').appendChild(document.createElement('br'));
}

 if (command.toLowerCase() === 'print') {
   printAll();
 } 
 else if (command.toLowerCase() === 'verify') {
   inputName = prompt('input name');
   let isExist =false;

   for (let i = 0; i < employeeList.length; i++) {
     if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
       isExist = true;
     }
   }
   render(isExist);
 }
 else if (command.toLowerCase() === 'lookup') {
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      print(i); 
    }
  }
} 
else if(command.toLowerCase() === 'contains'){
    let str = prompt('input string');
    for (let i = 0; i < employeeList.length; i++) {
      if ((employeeList[i].name).toUpperCase().includes(str.toUpperCase())) {
        print(i);
      }
    }
 }
 else if(command.toLowerCase() === 'update'){
  inputName = prompt('input name');
  const field = prompt('input field that you want to change it');
  const value = prompt('input new value for field');

  for (let i = 0; i < employeeList.length; i++) {
    if (inputName.toUpperCase() === (employeeList[i].name).toUpperCase()) {
      if (field.toLowerCase() === 'name') {
        employeeList[i].name = value;
      }
      else if(field.toLowerCase() === 'office number'){
        employeeList[i].officeNum = value;
      }
      else if(field.toLowerCase() === 'phone number'){
        employeeList[i].phoneNum = value;
      }
      print(i);
    }
  }
}
else if(command.toLowerCase() === 'add'){
  inputName = prompt('input name');
  const officeNum = prompt('input Office Number');
  const phoneNum = prompt('input Phone Number');

  const employee = {
  name: inputName,
  phoneNum: phoneNum,
  officeNum: officeNum
};

  employeeList.push(employee);
  printAll();
}

else if(command.toLowerCase() === 'delete'){
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
      employeeList.splice(i,1);
    } 
  }
  printAll();
}

// lookup //

else if(command.toLowerCase() === 'lookup'){
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
      employeeList.splice(i,1);
    } 
  }
  printAll();
}

else if(command.toLowerCase() === 'add'){
  inputName = prompt('input name');

  for (let i = 0; i < employeeList.length; i++) {
    if ((employeeList[i].name).toUpperCase() === inputName.toUpperCase()) {
      employeeList.splice(i,1);
    } 
  }
  printAll();
}
//repeat for lookup, add, etc
const verify = function (){
  $('input').addClass('show');
  command = 'verify';
}

const print = function (e){
  empty();
  e.preventDefault();
  console.log('print');
  command = 'print';
  $('input').removeClass('show');
  runCommand();
}

const run = function(e){
  e.preventDefault();
  runCommand();
}
console.log('link');
$('#verify').on('click', verify);
$('#print').on('click', print);
$('button').on('click', run)

// make buttons on first HTML invisible//

cons hidden = false;
function action() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('togglee').style.visibility = 'hidden';
    } else {
        document.getElementById('togglee').style.visibility = 'visible';
    }
}