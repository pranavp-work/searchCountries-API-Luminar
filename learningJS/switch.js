let checkValue = 'jaguar';
switch (checkValue) {
    case "jaguar" :
    case "bobcat" :
    case "cat" : {
        console.log('cat is printed');
        break;
    }

    case "bat" :
        console.log('bat is printed');
        break;
    case "mat" :
        console.log('mat is printed');
        break;
    
    default :
        console.log('nothing is printed');
        break;
}