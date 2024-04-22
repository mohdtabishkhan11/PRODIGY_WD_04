let popup = document.getElementById("popup");
function openPopup() {
    function required() {
        var empt = document.forms["form1"]["lastName"]["email"]["mobile"]["textarea"].value;
        if (empt == "") {
            alert("Please input a Value");
            return false;
        }
        else {

            return true;
        }
    }
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };

formbutton("create", {
    action: "https://formspree.io/f/moqgyeje",
    title: "How can we help?",
    fields: [
        {
            type: "firstname",
            label: "firstname:",
            name: "firstname",
            required: true,
            placeholder: "your First Name"
        },
        {
            type: "lastname",
            label: "lastname:",
            name: "lastname",
            required: true,
            placeholder: "your Last Name"
        },
        {
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your Email ID"
        },
        {
            type: "mobile",
            label: "mobile:",
            name: "mobile",
            required: true,
            placeholder: "Your Mobile Number"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    }
});

var typed = new Typed('#typedtext', {
    strings: ["An enthusiastic, conscientious, and developing IT professional with the personality to secure a rewarding career opportunity and maximize my training and skills. Highly motivated to develop my skills and improve professionally via challenging work and guidance. Excellent abilities in solving multi - faceted problems, including the ability to stay composed and professional under pressure."],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    showCursor: false,

});

