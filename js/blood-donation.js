//display
const display = (id) => {
    document.getElementById(id).style.display = "block";
};

//hide
const hide = (id) => {
    document.getElementById(id).style.display = "none";
};

// hide-reg-form
hide("reg-form");
hide("spinner");

// handling join us button
document.getElementById("join-us").addEventListener("click", function () {
    hide("find-donors-section");
    hide("carouselExampleIndicators");
    display("reg-form");
});

//fetch random users
document.getElementById("search-donors").addEventListener("click", () => {
    document.getElementById("random-donors").innerHTML = "";
    display("spinner");
    fetch(
        "https://randomuser.me/api/?results=50&inc=gender,name,email,location,dob,phone,cell,picture"
    )
        .then((res) => res.json())
        .then((data) => showUsers(data.results));
});

const showUsers = (users) => {
    hide("spinner");
    users.forEach((user) => {
        // console.log(user);
        const imgUrl = user.picture.large;
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
        const email = user.email;
        const phone = user.phone;
        const gender = user.gender;

        const randomDonors = document.getElementById("random-donors");
        const donorBox = document.createElement("div");
        donorBox.classList.add("col");
        donorBox.innerHTML = `
        <div class="card h-100 border-danger">
            <img    src="${imgUrl}"
                    class="rounded-circle mt-2 p-3 mx-auto alert-danger"
                    alt="..."
                    width="200"
                    height="200"
            />
            <div class="card-body text-center">
                <p class="text-secondary m-0">Hi, My name is</p>
                <h5 class="card-title">${fullName}</h5>
                <p class="card-text m-0">
                    <i class="far fa-envelope text-danger"></i>
                    <span class="text-danger">Email:<br> </span>${email}<br />
                    <i class="fas fa-phone-alt text-danger"></i>
                    <span class="text-danger">Phone: <br></span>${phone}<br />
                    <i class="far fa-plus-square text-danger"></i>
                    <span class="text-danger">Blood Group: <br></span>B+
                </p>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger w-100">Details</button>
            </div>
        </div>
        `;
        randomDonors.appendChild(donorBox);
    });
};
