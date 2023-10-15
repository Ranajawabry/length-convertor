console.log('hiiiii');
const feet =document.getElementById('feet');
const meter = document.getElementById('meter');
const cm = document.getElementById('cm');
const kilometer = document.getElementById('kilometer');
const inch = document.getElementById('inch');
const yard = document.getElementById('yard');
const mile = document.getElementById('mile');

console.log(mile.dataset.mesurment)



const convertTother =(input)=>{
    console.log(input.value);
    console.log(input.dataset.mesurment);
    if(input.dataset.mesurment === 'meter'){
        console.log("yess")
        cm.value=eval('input.value * 100');
        kilometer.value=eval('input.value / 1000');
        inch.value=eval('input.value * 34.37')
        feet.value=eval('input.value * 3.2808')
        yard.value=eval('input.value *  1.0936')
        mile.value=eval('input.value *  0.0006214')



    }
    else if(input.dataset.mesurment === 'kilometer'){
        console.log('nooo')
        cm.value=eval('input.value * 100000');
        meter.value=eval('input.value * 1000');
        inch.value=eval('input.value * 34.37 * 1000')
        feet.value=eval('input.value * 3.2808 * 1000')
        yard.value=eval('input.value *  1.0936 * 1000')
        mile.value=eval('input.value *  0.0006214 * 1000')
    }
    else if(input.dataset.mesurment === 'cm'){
        console.log('nooo')
        kilometer.value=eval('input.value / 100000');
        meter.value=eval('input.value / 100');
        inch.value=eval('input.value * 34.37 / 100')
        feet.value=eval('input.value * 3.2808 / 100')
        yard.value=eval('input.value *  1.0936 / 100')
        mile.value=eval('input.value *  0.0006214 / 100')
    }
    else if(input.dataset.mesurment === 'feet'){
        console.log('nooo')
        kilometer.value=eval('input.value * 0.0003048 ');
        meter.value=eval('input.value * 0.3048 ');
        inch.value=eval('input.value * 12.0001219 ')
        cm.value=eval('input.value * 30.48')
        yard.value=eval('input.value *  0.3333 ')
        mile.value=eval('input.value *  0.0001894 ')
    }
    else if(input.dataset.mesurment === 'inch'){
        console.log('nooo')
        kilometer.value=eval('input.value * 0.0003048 ');
        meter.value=eval('input.value * 0.0254 ');
        feet.value=eval('input.value * 0.08333  ')
        cm.value=eval('input.value * 2.54 ')
        yard.value=eval('input.value *  0.02778  ')
        mile.value=eval('input.value *  0.0.00001578  ')
    }
    else if(input.dataset.mesurment === 'yard'){
        console.log('nooo')
        kilometer.value=eval('input.value * 0.0009144  ');
        meter.value=eval('input.value * 0.9144  ');
        feet.value=eval('input.value * 3 ')
        cm.value=eval('input.value * 91.4411  ')
        inch.value=eval('input.value *  36.0003658 ')
        mile.value=eval('input.value *  0.0005682   ')
    }
    else if(input.dataset.mesurment === 'mile'){
        console.log('nooo')
        kilometer.value=eval('input.value *  1.6093  ');
        meter.value=eval('input.value * 0.9144  ');
        feet.value=eval('input.value * 5279.9459  ')
        cm.value=eval('input.value * 160934.7088  ')
        inch.value=eval('input.value *  63359.9949 ')
        yard.value=eval('input.value * 1759.982   ')
    }
}