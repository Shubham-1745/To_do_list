
module.exports.getdate = getdate;

function getdate(){

    let today = new Date();

    let options ={
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

let day = today.toLocaleDateString("en-US", options);

    return day;
}


exports.getday = function (){

    let today = new Date();

    let options ={
        weekday: "long"
    };

let day = today.toLocaleDateString("en-US", options);

    return day;
}