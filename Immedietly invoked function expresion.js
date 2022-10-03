//fungsi dapat di assign ke dalama variabel
var henshin = () => {
    return "Lock On";
};
console.log(henshin());

//fungsi dapat menjadi argumen di fungsi lain
var HenshinDecade = (berubah, decade) => {
    return berubah() + " " + decade;
};
console.log(HenshinDecade(henshin, "Decade"));

//fungsi dapat direturn dari fungsi lain
var FinalFormDecade = attackrider => {
    return decade => {
        return attackrider + " " + decade;
    };
};
var FinalFormAttackRider = FinalFormDecade("Henshin");
console.log(FinalFormAttackRider("Final Attack Rider Decade"));
