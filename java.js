function Open() {
   window.stop
   document.getElementById("myForm").style.visibility = "visible"

}

function Close() {

   document.getElementById("myForm").style.visibility = "hidden"

}

function Close2() {

   document.getElementById("EditForm").style.visibility = "hidden"

}


let Info = []

let headerNum = 0;

let Num;

function StartFunc() {

   var UserName = document.getElementById("User").value;
   var Password = document.getElementById("Pass").value;
   var FirstName = document.getElementById("fName").value;
   var LastName = document.getElementById("lName").value;

   let AnotherInfo = [UserName, Password, FirstName, LastName];

   let i = Info.length;
   let cellNum = 1;

   Info[i] = AnotherInfo;
   const table = document.getElementById("table1");
   const headerRow = document.createElement("tr");
   headerRow.setAttribute("id" , headerNum + "/" + 5)
   let headerRowId = headerRow.id
   let headerRowId2 = headerRowId.split("/")
   let headerRowId3 = headerRowId2[0]

   AnotherInfo.forEach((headerText) => {
      const headerCell = document.createElement("th");
      headerCell.innerHTML = headerText;
      headerCell.setAttribute("id", headerNum + "/" + cellNum);
      headerRow.append(headerCell);
      cellNum++
   });

   const headerButton1 = document.createElement("button");
   headerButton1.innerHTML = "Delete";
   headerButton1.setAttribute("class", "ButtonHead");
   headerButton1.setAttribute("id", headerNum);
   headerButton1.onclick = function(){

      let ThisNum = this.id

      Info.splice(ThisNum , 1)

      let DeleteHeader = document.getElementById(parseInt(ThisNum) + "/" + 5)

      let DeleteNick = document.getElementById(parseInt(ThisNum) + "/" + 1).id
      let DeletePass = document.getElementById(parseInt(ThisNum) + "/" + 2).id
      let DeleteName = document.getElementById(parseInt(ThisNum) + "/" + 3).id
      let DeleteLname = document.getElementById(parseInt(ThisNum) + "/" + 4).id
      let DeleteButt = document.getElementById(parseInt(ThisNum) + "/" + 5).id
      let DeleteEdit = document.getElementById(parseInt(ThisNum) + "/" + 6).id
      let DeleteRow = document.getElementById(ThisNum).id


      for(let i = 0; i <= (Info.length - ThisNum) - 1; i++){

         let DeleteNick2 = document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 1).id
         let DeletePass2 = document.getElementById((parseInt(ThisNum) + i + 1)  + "/" + 2).id
         let DeleteName2 = document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 3).id
         let DeleteLname2 = document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 4).id
         let DeleteButt2 = document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 5).id
         let DeleteEdit2 =  document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 6).id
         let DeleteRow2 = document.getElementById(parseInt(ThisNum) + i + 1).id

         document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 1).id = DeleteNick
         document.getElementById((parseInt(ThisNum) + i + 1)  + "/" + 2).id = DeletePass
         document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 3).id = DeleteName
         document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 4).id = DeleteLname
         document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 5).id = DeleteButt
         document.getElementById((parseInt(ThisNum) + i + 1) + "/" + 6).id = DeleteEdit
         document.getElementById(parseInt(ThisNum) + i + 1).id = DeleteRow

         DeleteNick = DeleteNick2
         DeletePass = DeletePass2
         DeleteName = DeleteName2
         DeleteLname = DeleteLname2
         DeleteButt = DeleteButt2
         DeleteEdit = DeleteEdit2
         DeleteRow = DeleteRow2

      }
      headerRowId3 = Info.length

      DeleteHeader.remove()
      headerNum = parseInt(headerRowId3)

   }


   const headerButton2 = document.createElement("button");
   headerButton2.innerHTML = "Edit";
   headerButton2.setAttribute("class", "ButtonHead2");
   headerButton2.setAttribute("id", headerNum + "/" + 6);
   headerButton2.onclick = function(){
      document.getElementById("EditForm").style.visibility = "visible"
      Num = headerButton2.id.split("/")[0]

   }

   document.getElementById("SaveEdit").onclick = function(){
      document.getElementById(Num + "/" + 1).textContent = document.getElementById("User2").value
      document.getElementById(Num + "/" + 2).textContent = document.getElementById("Pass2").value
      document.getElementById(Num + "/" + 3).textContent = document.getElementById("fName2").value
      document.getElementById(Num + "/" + 4).textContent = document.getElementById("lName2").value

      Info[Num][0] = document.getElementById("User2").value
      Info[Num][1] = document.getElementById("Pass2").value
      Info[Num][2] = document.getElementById("fName2").value
      Info[Num][3] = document.getElementById("lName2").value

      document.getElementById("EditForm").style.visibility = "hidden"
   }


   headerNum++;
   headerRow.append(headerButton1);
   headerRow.append(headerButton2);
   table.append(headerRow);

};


function Switch() {

   for (let S = 0; S < Info.length / 2; S++) {
      let BackInfo;
      let BackInfo2;
      BackInfo = Info[S]
      BackInfo2 = Info[Info.length - (1 + S)]
      Info[S] = BackInfo2
      Info[Info.length - (1 + S)] = BackInfo

      let UserName1 = document.getElementById(S + "/" + 1)
      let Password1 = document.getElementById(S + "/" + 2)
      let FirstName1 = document.getElementById(S + "/" + 3)
      let LastName1 = document.getElementById(S + "/" + 4)

      let UserName2 = document.getElementById(Info.length - (1 + S) + "/" + 1)
      let Password2 = document.getElementById(Info.length - (1 + S) + "/" + 2)
      let FirstName2 = document.getElementById(Info.length - (1 + S) + "/" + 3)
      let LastName2 = document.getElementById(Info.length - (1 + S) + "/" + 4)

      UserName1.innerHTML = BackInfo2[0]
      Password1.innerHTML = BackInfo2[1]
      FirstName1.innerHTML = BackInfo2[2]
      LastName1.innerHTML = BackInfo2[3]

      UserName2.innerHTML = BackInfo[0]
      Password2.innerHTML = BackInfo[1]
      FirstName2.innerHTML = BackInfo[2]
      LastName2.innerHTML = BackInfo[3]

   }

}