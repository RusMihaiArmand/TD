var currentRow = null;

//var fs = require('fs');
var data = {}

function run() {
  new Vue({
    //el: '#app',
    data: {
        users: [],
        games: [],
        borrows:[]
    },
    created: function () {
        this.getUsers().then(response => (this.users = response.data));
        this.getGames().then(response => (this.games = response.data));
        this.getBorrows().then(response => (this.borrows = response.data));
    },
    methods: {
      getUsers: function() {
          return axios.get('http://localhost:3000/users');
        },
        getGames: function () {
            return axios.get('http://localhost:3000/games');
        },
        getBorrows: function () {
            return axios.get('http://localhost:3000/borrowings');
        }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});




//document.querySelector("#book-list").addEventListener("click", (e) => {

//    target = e.target;
//    if (target.classList.contains("delete")) {

//        target.parentElement.parentElement.remove();

//    }

//});


//document.querySelector("#book-form").addEventListener("submit", (e) => {

//    e.preventDefault();

//    const title = document.querySelector("#titleInput").value;
//    const author = document.querySelector("#authorInput").value;
//    const bookType = document.querySelector("#typeInput").value;

//    if (title == "" || author == "" ||  bookType == "")
//    {
//        //to add
//    }
//    else
//    {
//        if (currentRow == null) {

//            const list = document.querySelector("#book-list");
//            const row = document.createElement("tr");

//            row.innerHTML = `
//                <td> ${title} </td >
//                <td> ${author} </td>
//                <td> ${bookType} </td>

//                <td>
//                     <a class="modify" href="#"> Modify </a>
//                     <a class="delete" href="#"> Delete </a>
//                </td>
//            `;

//            list.appendChild(row);
//            currentRow = null;
//        }
//        else {
//            currentRow.children[0].textContent = title;
//            currentRow.children[1].textContent = author;
//            currentRow.children[2].textContent = bookType;

//            currentRow = null;


//        }
//    }


//});

//document.querySelector("#book-list").addEventListener("click", (e) => {

//    target = e.target;

//    if (target.classList.contains("modify")) {

//        currentRow = target.parentElement.parentElement;
//        document.querySelector("#titleInput").value = currentRow.children[0].textContent;
//        document.querySelector("#authorInput").value = currentRow.children[1].textContent;
//        document.querySelector("#typeInput").value = currentRow.children[2].textContent;
//    }

//});




function GetGame(){
    console.log("R");

    let idText = $('#gameId').val();
    let id = parseInt(idText);
    console.log(id);


    var game;
    document.querySelector("#gameName").value = "";
    document.querySelector("#gameGenre").value = "";

    $("#comd").html("wait");

    axios.get('http://localhost:3000/games/' + id).then(
        (response) => {
  
            if (response.data === 'not found') {
                console.log('cool');
                document.querySelector("#gameName").value = "NA";
                document.querySelector("#gameGenre").value = "NA";
                document.querySelector("#gameStatus").value = "NA";
            }
            else {
                console.log(response.data);
                console.log('huh');
                document.querySelector("#gameName").value = response.data.name;
                document.querySelector("#gameGenre").value = response.data.genre;
                document.querySelector("#gameStatus").value = response.data.status;
            }
            
            $("#comd").html("ready");
        }
    );
}

function AddGame() {
    console.log("C");

    $("#comd").html("wait");
    var obj = {
        id: 69,
        name: document.querySelector("#gameName").value,
        genre: document.querySelector("#gameGenre").value,
        status: "available"
    }

    axios.put('http://localhost:3000/games', obj).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}

function UpdateGame() {
    console.log("U");

    $("#comd").html("wait");
    var obj = {
        id: document.querySelector("#gameId").value,
        name: document.querySelector("#gameName").value,
        genre: document.querySelector("#gameGenre").value,
        status: document.querySelector("#gameStatus").value
    }

    axios.post('http://localhost:3000/games', obj).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}

function DeleteGame() {
    console.log("D");

    let idText = $('#gameId').val();
    let id = parseInt(idText);
    console.log(id);

    $("#comd").html("wait");

    axios.delete('http://localhost:3000/games/' + id).then(
        (response) => {
            $("#comd").html("ready");
        }
    );

}





function GetUser() {

    let userN = $('#userName').val();


    var user;

    document.querySelector("#userPass").value = "";

    $("#comd").html("wait");

    axios.get('http://localhost:3000/users/' + userN).then(
        (response) => {

            if (response.data === 'not found') {

                document.querySelector("#userPass").value = "NA";

            }
            else {
                console.log(response.data);

                document.querySelector("#userPass").value = response.data.password;

            }

            $("#comd").html("ready");
        }
    );
}

function AddUser() {


    $("#comd").html("wait");
    var obj = {
        name: document.querySelector("#userName").value,
        password: document.querySelector("#userPass").value,
    }

    axios.put('http://localhost:3000/users', obj).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}

function UpdateUser() {


    $("#comd").html("wait");
    var obj = {
        name: document.querySelector("#userName").value,
        password: document.querySelector("#userPass").value,
        newpassword: document.querySelector("#newuserPass").value
    }

    axios.post('http://localhost:3000/users', obj).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}

function DeleteUser(userN){

    //let userN = $('#userName').val();


    

    axios.delete('http://localhost:3000/users/' + userN).then(
        (response) => {
            $("#comd").html("user deleted");
        }
    );

}


function getBorrows2() {
    return axios.get('http://localhost:3000/borrowings');
}



function HowMany() {
    let userN = $('#userName').val();
    let cont = 0;
    console.log("goins");
    $("#comd").html("wait");


    var number = 0;

    axios.get('http://localhost:3000/borrowings' ).then(
        (response) => {

            for (let i = 0; i < response.data.length; i++)
            {
                if (response.data[i].user == userN) {
                    cont = cont + 1;

                }
            }

            //document.querySelector("#bnr").value = cont;
            number = cont;
            $("#comd").html("ready2");
            document.querySelector("#bnr").value = number + " games";
        }

    );
   
   
    //axios.get('http://localhost:3000/borrowings/' + userN).then(
    //    (response) => {

    //        console.log("A");
    //        console.log(response.data);

    //        document.querySelector("#bnr").value = response.data;

    //        $("#comd").html("ready");
    //    }
    //);

    
}



function BorrowGame() {


    $("#comd").html("wait");
    var obj = {
        gameid: document.querySelector("#borrowgameId").value,
        user: document.querySelector("#userName").value
    }

    axios.put('http://localhost:3000/borrowings', obj).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}

function ReturnGame() {


    $("#comd").html("wait");


    var gameid = document.querySelector("#borrowgameId").value;
    

    axios.delete('http://localhost:3000/borrowings/' + gameid).then(
        (response) => {
            $("#comd").html("ready");
        }
    );


}


function WhoHasIt() {

    let id = $('#borrowgameId').val();


    document.querySelector("#userName").value = "";

    $("#comd").html("wait");

    axios.get('http://localhost:3000/borrowings/' + id).then(
        (response) => {

            if (response.data === 'not found') {

                document.querySelector("#userName").value = "NOBODY";

            }
            else {

                document.querySelector("#userName").value = response.data.user;

            }

            $("#comd").html("ready");
        }
    );
}

function SetA() {

    localStorage.setItem("myCat", "CatA");
}

function SetB() {

    localStorage.setItem("myCat", "CatB");
}

function Retrieve() {

    const cat = localStorage.getItem("myCat");
    $("#thing").html(cat);

}

function Retrieve2() {

    const us = localStorage.getItem("currentUser");
    $("#thing2").html(us);

}

function LogIn() {

    let userN = $('#userName').val();

    var user;



    axios.get('http://localhost:3000/users/' + userN).then(
        (response) => {

            if (response.data === 'not found') {

                document.querySelector("#userPass").value = "NA";

            }
            else {

                if (document.querySelector("#userPass").value == response.data.password)
                {
                    localStorage.setItem("currentUser", userN);
                    window.location.href = 'index2.html';

                }

            }


        }
    );
}

function DeleteUser2() {

    let userN = $('#userName').val();

    var user;
    $("#comd").html("wait");


    axios.get('http://localhost:3000/users/' + userN).then(
        (response) => {

            if (response.data === 'not found') {

                $("#comd").html("no such user");

            }
            else {

                if (document.querySelector("#userPass").value == response.data.password) {

                    DeleteUser(userN);

                }
                else {
                    $("#comd").html("wrong password");
                }

            }


        }
    );
}

function RefreshTable() {

    //$("#game-table tbody").remove(); 

    //$('#game-table tbody').remove();

    var table = document.getElementById("game-table");

    //console.log(table.rows.length);

    var numb = table.rows.length;

    for (var i = numb-1; i >=1; i--) {

        table.deleteRow(i);
    }


    //var header = table.createTHead();
    //var row = header.insertRow(0);

    //var cell00 = row.insertCell(0);
    //cell00.innerHTML = "ID"; 
    //var cell01 = row.insertCell(1);
    //cell01.innerHTML = "NAME"; 
    //var cell02 = row.insertCell(2);
    //cell02.innerHTML = "GENRE"; 
    //var cell03 = row.insertCell(3);
    //cell03.innerHTML = "STATUS"; 


    axios.get('http://localhost:3000/games' ).then(
        (response) => {

            if (response.data === 'not found') {

            }
            else {

                var allgames = response.data;

                for (var i = 0; i < allgames.length; i++) {

                   // console.log(allgames[i].name);

                    var row = table.insertRow(table.length);

                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);

                    cell1.innerHTML = allgames[i].id;
                    cell2.innerHTML = allgames[i].name;
                    cell3.innerHTML = allgames[i].genre;
                    cell4.innerHTML = allgames[i].status;

                }
   
            }


        }
    );

    //var row = table.insertRow(table.length);

    //var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //var cell3 = row.insertCell(2);

    //var allgames = 


    //cell1.innerHTML = "NEW game";
    //cell2.innerHTML = "horror?";
    //cell3.innerHTML = "yes"; 




    //var table = document.getElementById("game-table");

    //// Create an empty <tr> element and add it to the 1st position of the table:
    //var row = table.insertRow(table.length);

    //// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    //var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    //var cell3 = row.insertCell(2);

    //// Add some text to the new cells:
    //cell1.innerHTML = "NEW game";
    //cell2.innerHTML = "horror?"; 
    //cell3.innerHTML = "yes"; 

}