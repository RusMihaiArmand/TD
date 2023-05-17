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

function DeleteUser(){

    let userN = $('#userName').val();


    $("#comd").html("wait");

    axios.delete('http://localhost:3000/users/' + userN).then(
        (response) => {
            $("#comd").html("ready");
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