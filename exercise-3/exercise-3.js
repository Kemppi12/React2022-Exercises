// 3.1

const greet = () => {
    console.log("Hello there!");
};

greet();


let sum = (a,b,c) => { 
    let result = a + b + c;
    return result;
};

console.log( sum (5,6,5) );


//3.2

const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
    var max_str = names[0].length;
    var ans = names[0];
    for (var i = 1; i < names.length; i++) {
        var maxi = names[i].length;
        if (maxi > max_str) {
            ans = names[i];
            max_str = maxi;
        }
    }
    return ans;
    
}

console.log(longestName(names));


//3.3


/* const greet50 = () => {

    var num = Math.random();

    //if(num >=0.5 )

    return Math.random();
};

if(greet50 < 0,5) {
    console.log("Good morning!")
}
    else if (greet50 >= 0,5) {
        console.log("Good evening!")
    }
    else {

    } */
//console.log(greet50()); 



//3.4 