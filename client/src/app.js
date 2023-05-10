var currentRow = null;

//var fs = require('fs');
var data = {}

function run() {
  new Vue({
    el: '#app',
    data: {
        users: [],
        testing: []
    },
    created: function () {
        this.getUsers().then(response => (this.users = response.data));
        this.getTest().then(response => (this.testing = response.data));
    },
    methods: {
      getUsers: function() {
          return axios.get('http://localhost:3000/users');
        },
        getTest: function () {
            return axios.get('http://localhost:3000/tester');
        }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});


function testFunction() {
    //console.log(5 + 4);

    //data.table = []
    //for (i = 0; i < 6; i++) {
    //    var obj = {
    //        id: i,
    //        square: i * i
    //    }
    //    data.table.push(obj)
    //}


    for (i = 1; i < 2; i++) {
        var obj = {
            id: i,
            square: i * i
        }
    }
    console.log(obj);
    console.log(JSON.stringify(obj));


    data.table = []
    for (i = 0; i < 6; i++) {
        var obj = {
            id: i,
            square: i * i
        }
        data.table.push(obj)
    }

    axios.put('http://localhost:3000/tester', obj,data);


    

    //console.log(data);
    //console.log(JSON.stringify(data));

    // axios.put('http://localhost:3000/tester', data)  ;

    //fs.writeFile("input.json", JSON.stringify(data), function (err) {
    //    if (err) throw err;
    //    console.log('complete');
    //}
    //);

}


document.querySelector("#book-list").addEventListener("click", (e) => {

    target = e.target;
    if (target.classList.contains("delete")) {

        target.parentElement.parentElement.remove();

    }

});


document.querySelector("#book-form").addEventListener("submit", (e) => {

    e.preventDefault();

    const title = document.querySelector("#titleInput").value;
    const author = document.querySelector("#authorInput").value;
    const bookType = document.querySelector("#typeInput").value;

    if (title == "" || author == "" ||  bookType == "")
    {
        //to add
    }
    else
    {
        if (currentRow == null) {

            const list = document.querySelector("#book-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td> ${title} </td >
                <td> ${author} </td>
                <td> ${bookType} </td>

                <td>
                     <a class="modify" href="#"> Modify </a>
                     <a class="delete" href="#"> Delete </a>
                </td>
            `;

            list.appendChild(row);
            currentRow = null;
        }
        else {
            currentRow.children[0].textContent = title;
            currentRow.children[1].textContent = author;
            currentRow.children[2].textContent = bookType;

            currentRow = null;


        }
    }


});

document.querySelector("#book-list").addEventListener("click", (e) => {

    target = e.target;

    if (target.classList.contains("modify")) {

        currentRow = target.parentElement.parentElement;
        document.querySelector("#titleInput").value = currentRow.children[0].textContent;
        document.querySelector("#authorInput").value = currentRow.children[1].textContent;
        document.querySelector("#typeInput").value = currentRow.children[2].textContent;
    }

});