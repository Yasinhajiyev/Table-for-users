var btn = document.querySelector("button")
var message1 = document.querySelector("#message1")
var message2 = document.querySelector("#message2")
var message3 = document.querySelector("#message3")
var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var error = false;

btn.onclick = () => {
    let user = getUserData();


    if (user.name != '' && user.surname != '' && user.email != '') {
        if (user.name.length < 3) {
            error = true
            message1.innerHTML = '<p>Minimum 3 hərfdən istifadə olunmalıdır</p>'

        } else {
            error = false
            message1.innerHTML = ''
        }
        if (user.surname.length < 5) {
            error = true
            message2.innerHTML = '<p>Minimum 5 hərfdən istifadə olunmalıdır</p>'
        } else {
            error = false
            message2.innerHTML = ''

        }
        if (!user.email.match(pattern)) {
            error = true
            message3.innerHTML = 'Daxil etdiyiniz adres movcud deyildir'
        } else {
            error = false
            message3.innerHTML = ''
        }

        if (!error && user.name.length > 3 && user.surname.length > 5 && user.email.match(pattern)) {
            var tr =
                `<tr>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.email} </td>
                    <td> <button class="remove" >Sil</button>
                    </td>
                </tr>`
            document.querySelector('table tbody').insertAdjacentHTML('beforeend', tr);

            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("surname").value = ""
            deleteTr();
        } else {
            alert("xxxxx-----xxxx")
        }
    } else {
        alert("Xanalari doldurun")
    }




}




function getUserData() {
    var objname = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value

    return {
        name: objname,
        surname: surname,
        email: email
    }
}



function deleteTr(e) {
    var remove = document.querySelectorAll(".remove")
    remove.forEach(element => {
        element.addEventListener('click', () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    element.parentElement.parentElement.remove()

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        })
    });

}


deleteTr();