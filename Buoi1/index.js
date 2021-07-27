let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let imageLink = document.getElementById("imagelink");
let mainList = document.getElementById("booklist");

let createBtn = document.getElementById("createbtn");

var bookObj = {
    title: "",
    author: "",
    isbn: "",
    imageLink: "",
    passed: false
}

createBtn.addEventListener('click', () => {
    if (!title.value || !author.value || !isbn.value || !imageLink.value) {
        alert("Xin hãy nhập đầy đủ thông tin");
    } else {
        bookObj.title = `${title.value}`;
        bookObj.author = `${author.value}`;
        bookObj.isbn = `${isbn.value}`;
        bookObj.imageLink = `${imageLink.value}`;
        let bookObj_serialized = JSON.stringify(bookObj);
        localStorage.setItem(`${title.value}`, `${bookObj_serialized}`);
    }
    location.reload();
})

function loadBookList() {
    for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        let arrayKey = JSON.parse(localStorage.getItem(key));
        if (arrayKey.passed === false) {
            mainList.innerHTML += `
            <div id="card-container" class="col-md-4">
                <div class="card" style="width:15rem">
                    <img class="card-img-top"
                        src="${arrayKey.imageLink}">
                    <div class="card-body">
                        <h4>Title: ${arrayKey.title}</h3>
                        <h5>Author: ${arrayKey.author}</h4>
                        <h6>ISBN: ${arrayKey.isbn}</h5>
                    </div>
                </div>
            </div>  
        `
        }
    }
}

loadBookList();
