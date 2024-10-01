function openAddUser() {

   document.getElementById("myForm").style.visibility = "visible"

}

function closeAddUser() {

   document.getElementById("myForm").style.visibility = "hidden"

}

function closeEdit() {

   document.getElementById("EditForm").style.visibility = "hidden"

}


let Info = []

let headerNum = 0;

let Num;

let renderNum = 0


function saveFunc() {
   var userName = document.getElementById("User").value;
   var Password = document.getElementById("Pass").value;
   var fistName = document.getElementById("fName").value;
   var lastName = document.getElementById("lName").value;

   giveInfo(userName, Password, fistName, lastName)
}

function giveInfo(userName, Password, fistName, lastName) {
   let anotherInfo = {
      User:userName,
       Password:Password,
        fName:fistName,
         lName:lastName
      };
   let i = Info.length
   Info[i] = anotherInfo;
   render()
}

function render() {

   headerNum = 0
   const element = document.getElementById("rowBody");
   while (element.firstChild) {
      element.removeChild(element.firstChild);
   }

   for (let n = 0; n < Info.length; n++) {

      const headerRow = document.createElement("tr");
      headerRow.setAttribute("id", headerNum + "/" + 5)
      let cellNum = 1;

      Object.values(Info[n]).forEach((headerText) => {
         const headerCell = document.createElement("th");
         headerCell.innerHTML = headerText;
         headerCell.setAttribute("id", headerNum + "/" + cellNum);
         headerRow.append(headerCell);
         cellNum++
      });

      const headerButton1 = document.createElement("button");
      headerButton1.innerHTML = "Delete";
      headerButton1.setAttribute("class", "ButtonHead")
      headerButton1.setAttribute("id", headerNum);
      headerButton1.onclick = function () {

         let thisNum = this.id
         Info.splice(thisNum, 1)
         headerNum = Info.length
         render()

      };

      const headerButton2 = document.createElement("button");
      headerButton2.innerHTML = "Edit";
      headerButton2.setAttribute("class", "ButtonHead2")
      headerButton2.setAttribute("id", headerNum + "/" + 6);
      headerButton2.onclick = function () {
         document.getElementById("editForm").style.visibility = "visible"
         Num = headerButton2.id.split("/")[0]

      }
      document.getElementById("saveEdit").onclick = function () {

         Info[Num].User = document.getElementById("User2").value
         Info[Num].Password = document.getElementById("Pass2").value
         Info[Num].fName = document.getElementById("fName2").value
         Info[Num].lName = document.getElementById("lName2").value

         document.getElementById("EditForm").style.visibility = "hidden"

         render()
      };

      headerNum++;
      document.getElementById("rowBody").append(headerRow);
      headerRow.append(headerButton1);
      headerRow.append(headerButton2);

   }

};


function Switch() {

   Info.reverse()
   render()

}