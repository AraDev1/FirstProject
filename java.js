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

let renderNum = 0


function startInfo(){
   var userName = document.getElementById("User").value;
   var Password = document.getElementById("Pass").value;
   var fistName = document.getElementById("fName").value;
   var lastName = document.getElementById("lName").value;

  // startFunc(userName, Password, fistName, lastName)
   infoStart(userName, Password, fistName, lastName)
}

function infoStart(userName, Password, fistName, lastName){
   let anotherInfo = [userName, Password, fistName, lastName];
   let i = Info.length
   Info[i] = anotherInfo;
   render()
}

function render(){
   debugger
   for(i = 0; i < renderNum; i++){
      let deleteHeader = document.getElementById(i + "/" + 5)
      deleteHeader.remove()
      headerNum = 0
   }
   renderNum = 0
   for(n = 0; n < Info.length; n++){
      renderNum++
      const table = document.getElementById("table1");
      const headerRow = document.createElement("tr");
      headerRow.setAttribute("id" , headerNum + "/" + 5);
      let cellNum = 1;

      Info[n].forEach((headerText) => {
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
   headerButton1.onclick = function(){

      let ThisNum = this.id
      Info.splice(ThisNum , 1)
      headerNum = Info.length
      render()
   
   };

    const headerButton2 = document.createElement("button");
   headerButton2.innerHTML = "Edit";
   headerButton2.setAttribute("class", "ButtonHead2")
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
   };

   headerNum++;
   table.append(headerRow);
   headerRow.append(headerButton1);
   headerRow.append(headerButton2);

   }

};


function Switch() {

   Info.reverse()
   render()

}