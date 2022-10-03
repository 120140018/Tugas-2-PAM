//high order function dengan mengembalikan fungsi lain
function berubah(henshin){
    return function lockOn(Orange){
        console.log(henshin, Orange);
    };
};
let orangearm = berubah("Orange");
orangearm("Hanamichi On Stage");

