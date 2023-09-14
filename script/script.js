const Extract = function () {
  const min = 77;
  const max = 0;

  const Random = Math.floor(Math.random() * (max - min + 1)) + min;
  let ChosenElemnt = document.getElementsByClassName(`${Random}`)[0];
  if (ChosenElemnt.classList.value !== `number ${Random} chosen`) {
    ChosenElemnt.classList.add(`chosen`);
    console.log(`numero estratto`, Random);
  } else {
    Extract();
  }
};
// const Extract2 = function () {
//   const min = 77;
//   const max = 0;
//   const Random = Math.floor(Math.random() * (max - min + 1)) + min;
//
//   if (ChosenElemnt.classList.value !== `playe ${Random} chosen`) {
//     ChosenElemnt.classList.add(`chosen`);
//     console.log(`numero estratto`, Random);
//   } else {
//     Extract();
//   }
// };

const arrayOfNumber = [];

const createTable = function () {
  const table = document.getElementById(`tab`);
  for (i = 0; i < 76; i++) {
    arrayOfNumber.push(i);
    const case1 = document.createElement(`div`);
    case1.innerHTML = `<p>${i + 1}</p>`;
    case1.classList.add(`number`);
    case1.classList.add(`${i + 1}`);
    table.appendChild(case1);
    // const Extract = function () {
    //   const min = parseInt(prompt("Enter a min value:76 "));
    //   const max = parseInt(prompt("Enter a max value:1"));
    //   const Random = 5;
    //   Math.floor(Math.random() * (max - min + 1)) + min;
    //   const ChosenElement = document.getElementsByClassName(`5`)[0];
    //   ChosenElement.classList.add(`chosen`);
    //   console.log(Random);
    // };
  }
};
createTable();

const playerTable = function () {
  const table1 = document.getElementById(`players`);
  const divco = document.createElement(`div`);
  for (i = 0; i < 24; i++) {
    const case2 = document.createElement(`div`);
    case2.innerHTML = `<p>${i + 1}</p>`;
    case2.classList.add(`playersTab`);
    case2.classList.add(`${i + 1}`);
    divco.classList.add(`divco`);
    divco.appendChild(case2);
    table1.appendChild(divco);
  }
};
