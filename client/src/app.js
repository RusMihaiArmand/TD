var currentRow = null;

function run() {
  new Vue({
    el: '#app',
    data: {
      users: []
    },
    created: function () {
      this.getUsers().then(response => (this.users = response.data));
    },
    methods: {
      getUsers: function() {
          return axios.get('http://localhost:3000/users');
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});


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