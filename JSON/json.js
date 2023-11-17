//create a functional constructor with following properties:- name,price,ram,space
function mobile(name,price,ram,space){
    this.name = name,
    this.price = price,
    this.ram = ram,
    this.space = space
}

var redmi = new mobile("redmi", 18000, "8GB", "64GB");
var iphone = new mobile("iphone", 108000, "8GB", "120GB");
var samsung = new mobile("samsung", 99000, "8GB", "120GB");
var phones = [redmi, iphone, samsung];

for(let phone of phones)
    if(phone.price > 40000){
        console.log(phone.name);
        for(let prop in phone)
            console.log(` ${prop} : ${phone[prop]}`); }