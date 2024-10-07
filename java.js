function openAddUser() {

   document.getElementById("myForm").style.visibility = "visible";

};

function closeAddUser() {

   document.getElementById("myForm").style.visibility = "hidden";

};

function closeEdit() {

   document.getElementById("editForm").style.visibility = "hidden";

};



let headerNum = 0;

let num;

let getFromStorage = JSON.parse(localStorage.getItem("info"))

function infoStorage() {
   localStorage.setItem("info", JSON.stringify(info))
}
const info = []

   if (getFromStorage != null) {
      for (let i = 0; i < getFromStorage.length; i++) {
         info.push(getFromStorage[i])
      }
   }


function saveFunc() {
   const userName = document.getElementById("user").value;
   const password = document.getElementById("Pass").value;
   const fistName = document.getElementById("fName").value;
   const lastName = document.getElementById("lName").value;

   const parameter = {
      userName,
      password,
      fistName,
      lastName,
   };

   addUser(parameter);
};

function addUser(parameter) {
   const anotherInfo = {
      user: parameter.userName,
      password: parameter.password,
      fName: parameter.fistName,
      lName: parameter.lastName
   };
   info.push(anotherInfo);
   render();
   infoStorage()
};

function render() {

   headerNum = 0;
   const rowBody = document.getElementById("rowBody");
   if (rowBody != null) {
      while (rowBody.firstChild) {
         rowBody.removeChild(rowBody.firstChild);
      }
   }

   for (let n = 0; n < info.length; n++) {

      const headerRow = document.createElement("tr");
      headerRow.setAttribute("id", headerNum + "/" + 5);
      let cellNum = 1;

      Object.values(info[n]).forEach((headerText) => {
         const headerCell = document.createElement("th");
         headerCell.innerHTML = headerText;
         headerCell.setAttribute("id", headerNum + "/" + cellNum);
         headerRow.append(headerCell);
         cellNum++;
      });

      const headerButton1 = document.createElement("button");
      headerButton1.innerHTML = "delete";
      headerButton1.setAttribute("class", "buttonHead");
      headerButton1.setAttribute("id", headerNum);
      headerButton1.onclick = function () {

         const thisNum = this.id;
         delete(thisNum)
         headerNum = info.length;
         render();

      };

      const headerButton2 = document.createElement("button");
      headerButton2.innerHTML = "edit";
      headerButton2.setAttribute("class", "buttonHead2");
      headerButton2.setAttribute("id", headerNum + "/" + 6);
      headerButton2.onclick = function () {

         document.getElementById("editForm").style.visibility = "visible";
         num = headerButton2.id.split("/")[0];

         document.getElementById("userEdit").value = info[num].user;
         document.getElementById("passEdit").value = info[num].password;
         document.getElementById("fNameEdit").value = info[num].fName;
         document.getElementById("lNameEdit").value = info[num].lName;

      }
      document.getElementById("saveEdit").onclick = function () {

         let user = document.getElementById("userEdit").value;
         let password = document.getElementById("passEdit").value;
         let fName = document.getElementById("fNameEdit").value;
         let lName = document.getElementById("lNameEdit").value;

         Edit(user, password, fName, lName, num)

         document.getElementById("editForm").style.visibility = "hidden";

         render();
      };

      headerNum++;
      document.getElementById("rowBody").append(headerRow);
      headerRow.append(headerButton1);
      headerRow.append(headerButton2);

   }

};


function Switch() {
   info.reverse();
   infoStorage()
   render();
}

function Delete(Id) {
   info.splice(Id, 1)
   infoStorage()
}

function Edit(user, password, fName, lName, Id) {
   debugger

   info[Id].user = user
   info[Id].password = password
   info[Id].fName = fName
   info[Id].lName = lName

   infoStorage()
}