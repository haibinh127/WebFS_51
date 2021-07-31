let searchBtn = document.getElementById("searchbtn");
searchbtn.onclick = async () => {

    let githubName = document.getElementById("githubname");

    let githubUrl = `https://api.github.com/users/${githubName.value}`;

    let userProfile = document.getElementById("userprofile");

    let res = await fetch(githubUrl).catch();

    if (res.ok) {
        let user = await res.json();
        console.log(user);
        userProfile.innerHTML = `
            <img src="${user.avatar_url}"
                class="card-img-top" alt="...">
            <div  style="background-color:orchid" class="card-body">
                <h5 class="card-title">Name: ${user.login}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li style="background-color:mediumslateblue" class="list-group-item">Email: ${user.email}</li>
                <li style="background-color:mediumslateblue" class="list-group-item">Company: ${user.company} </li>
                <li style="background-color:mediumslateblue" class="list-group-item">Followers: ${user.followers}</li>
            </ul>
        `
    } else {
        userProfile.innerHTML = `
        <p style="font-weight: bold; font-size: 17.5px; align-item:center; justify-content:center; padding-left:10px; padding-top:12px">Not found username 😁</p>
        `
    }

}