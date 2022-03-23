// CONTACT PAGE
// SECTION-1-LEFT FORM
let submitBtn = document.querySelector("#submiBtn");
submitBtn.addEventListener(("click"), (e) => {
            e.preventDefault();

            let firstName = document.querySelector("#firstName").value;
            let lastName = document.querySelector("#lastName").value;
            let email = document.querySelector("#userEmail").value;

            let userRecord = new Array();

            userRecord = JSON.parse(localStorage.getItem("userRecord")) ? JSON.parse(localStorage.getItem("userRecord")) : [];

            if (userRecord.includes("userEmail") {
                    alert("Duplicate email")
                } else {
                    userRecord.push({
                        "firstName": firstName,
                        "lastName": lastName,
                        "userEmail": email
                    })
                    localStorage.setItem("userRecord", JSON.stringify((userRecord)));
                }

            })