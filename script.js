var driverName = window.prompt("Whats your name")
var nav = window.prompt( "Whats your nagitaor")

console.log("#### Iteration 1")
console.log(" ")
console.log("The driver name is " + driverName)
console.log("The navigator's name is " + nav)


if (driverName.length > nav.length){
    console.log("The Driver has the longest name, it has " + driverName.length + " characters")
} else if (driverName.length < nav.length){
    console.log("Yo, navigator got the longest name, it has " + nav.length + " characters")
} else {
    console.log("Wow, you both got equally long names, " + nav.length  + " characters!")
}

console.log(" ")
console.log("#### Iteration 2")
console.log(" ")

var esp = "";
for (var i=0; i < driverName.length; i++) {
    esp += (driverName.charAt(i) + " ");
}
    console.log(esp.trim().toLowerCase())

var guion = "";
for (var i=0; i < driverName.length; i++) {
    guion += (driverName.charAt(i).toLowerCase() + "-");
}
    
guion = guion.slice(0, -1)
console.log(guion + "!")

var navEsp = "";
for (var i=0; i < nav.length; i++) {
    navEsp += (nav.charAt(i) + " ");
}
console.log(navEsp.trim().toUpperCase());

console.log(" ")
console.log("#### Iteration 3")
console.log(" ")


for (var i=0; i <= 20; i++) {
    console.log(i)
}

console.log(" ")

for (var i = 2; i <= 128; i += 2) {
    if (i % 3 === 0 && i % 5 !== 0){
        console.log(i)
    }
}

console.log(" ")

for (var i = 2; i <= 10; i ++) {
    console.log("2 ^ " + i + " = " + 2**i)
}

console.log(" ")
console.log("#### Iteration 4")
console.log(" ")

var par1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis. Tristique senectus et netus et malesuada fames. Aliquet nec ullamcorper sit amet risus nullam. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Tincidunt nunc pulvinar sapien et ligula. Pellentesque nec nam aliquam sem. Orci porta non pulvinar neque laoreet. Libero id faucibus nisl tincidunt eget nullam non nisi. Libero justo laoreet sit amet cursus sit amet dictum sit. Sit amet massa vitae tortor condimentum lacinia. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Neque viverra justo nec ultrices. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Morbi tincidunt ornare massa eget egestas purus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis."
var par2 = "Sed egestas egestas fringilla phasellus. Turpis massa sed elementum tempus egestas sed sed risus. Aenean euismod elementum nisi quis eleifend quam. Gravida quis blandit turpis cursus in. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Nisi est sit amet facilisis magna etiam tempor orci eu. Dignissim suspendisse in est ante in. Tellus molestie nunc non blandit massa enim nec dui. Tempor orci dapibus ultrices in iaculis nunc. Rhoncus urna neque viverra justo nec. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Diam sollicitudin tempor id eu nisl nunc. Proin libero nunc consequat interdum varius sit. Porttitor lacus luctus accumsan tortor posuere ac ut. Faucibus a pellentesque sit amet porttitor eget dolor. Mauris a diam maecenas sed enim ut sem viverra. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Amet justo donec enim diam. A diam sollicitudin tempor id."
var par3 = "Id nibh tortor id aliquet. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Sed adipiscing diam donec adipiscing tristique risus. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Dui sapien eget mi proin sed libero enim sed faucibus. Iaculis nunc sed augue lacus viverra vitae congue eu. Magna ac placerat vestibulum lectus mauris ultrices eros. Nec nam aliquam sem et tortor consequat id porta nibh. Tellus integer feugiat scelerisque varius morbi enim. Augue ut lectus arcu bibendum at varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Morbi quis commodo odio aenean sed adipiscing diam donec. Et tortor at risus viverra."
var lorem = (+ par1 +  par2 + par3)

var wordsCount = lorem.split(" ").length;
console.log("There are " + wordsCount + " words.")
var etsCount = lorem.split(" et").length;
console.log("The word 'et' appears " + etsCount + " times.")