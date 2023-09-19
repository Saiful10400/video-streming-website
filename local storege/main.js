let paretn = document.getElementById("main");

let Add = () => {
  let input = document.getElementById("inputFild").value;
  document.getElementById("inputFild").value = "";
  DisplayData(input);
  SetData(input);
};

let DisplayData = (item) => {
  let li = document.createElement("li");
  li.innerText = item;
  paretn.appendChild(li);
};

// local storege data save and load.

// get local storage data

let GetData = () => {
  let previousData = localStorage.getItem("list");

  if (previousData) {
    return previousData;
  }
  return "[]";
};

// set local storeage data.

let SetData = (item) => {
  let previousData = GetData();
  previousData = JSON.parse(previousData);
  previousData = [...previousData, item];
  LoadData(previousData);
  // console.log(previousData)
};

// load data to local storege.

let LoadData = (item) => {
  localStorage.setItem("list", JSON.stringify(item));
};

// After relod page,Display local storage data.

let AfterReloadDataRender = () => {
  let data = GetData();
  data = JSON.parse(data);
  data.forEach((item) => DisplayData(item));
};

AfterReloadDataRender();

// clear button.

let Clear = () => {
  document.getElementById("main").innerText = "";
  localStorage.removeItem("list");
};
