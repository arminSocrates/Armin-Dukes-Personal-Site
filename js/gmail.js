class Gmail {
    constructor(address, password) {
        this.address = address;
        this.password = password;
    }
    send(to, title, body) {
        // https://mail.google.com/mail/u/0/?fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com&tf=cm
        let url = `https://mail.google.com/mail/u/0/?fs=1&to=${to}&su=${title}&body=${body}&tf=cm`;
        location.href=url;
    }
}
// console.log("here")
// const mail = new Gmail();
// mail.send("mooncode610@gmail.com","mooncode610@gmail.com","333")