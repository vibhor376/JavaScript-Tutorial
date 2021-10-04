const students = [
    { name: "vibhor", subject: "JavaScript" },
    { name: "naman", subject: "C++" },
    { name: "abhay", subject: "C" },
    { name: "vaibhav", subject: "python" }
]

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            students.push(student);
            console.log('Student enrolled');
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};

function getStudent() {
    setTimeout(() => {
        console.log('Printing list');
        let html = "";
        students.forEach(function (element) {
            html += `<li> ${element.name} is fond of ${element.subject}`;
        });
        document.getElementById('students').innerHTML = html;
    }, 5000);
}

let obj = { name: "akshat", subject: "NodeJs" };
enrollStudent(obj).then(getStudent).catch(function () {
    console.log('Sorry some error occured!');
});

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()