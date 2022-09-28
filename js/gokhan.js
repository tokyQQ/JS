let userName = prompt("İsim girin:")
if (!userName || userName.length >= 20) {
    alert("Geçerli bir kullanıcı adı giriniz")
}

document.querySelector("#myName").innerHTML = userName
