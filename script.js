var Lengthbtn = document.getElementById("Lengthbtn");
var Areabtn = document.getElementById("Areabtn");
var weightbtn = document.getElementById("weightbtn");
var Volumebtn = document.getElementById("Volumebtn");
var tempbtn = document.getElementById("tempbtn");

var Lengthbox = document.getElementById("LengthBox");
var Areabox = document.getElementById("AreaBox");
var weightbox = document.getElementById("weightBox");
var Volumebox = document.getElementById("VolumeBox");
var tempbox = document.getElementById("TempBox");

Lengthbtn.classList.add('pressed');
Lengthbox.classList.add('active');
setDefaultLengthUnits();

function hideAll(){
    Lengthbox.classList.remove('active');
    Areabox.classList.remove('active');
    weightbox.classList.remove('active');
    Volumebox.classList.remove('active');
    tempbox.classList.remove('active');
}
function unpressall(){
    Lengthbtn.classList.remove('pressed');
    Areabtn.classList.remove('pressed');
    weightbtn.classList.remove('pressed');
    Volumebtn.classList.remove('pressed');
    tempbtn.classList.remove('pressed');
}

Lengthbtn.addEventListener('click', ()=> {
    hideAll();
    unpressall();
    setDefaultLengthUnits();
    Lengthbox.classList.add('active');
    Lengthbtn.classList.add('pressed');
    
});
Areabtn.addEventListener('click', ()=> {
    hideAll();
    unpressall(); 
    setDefaultAreaUnits();
    Areabox.classList.add('active');
    Areabtn.classList.add('pressed');
   
});
weightbtn.addEventListener('click', ()=> {
    hideAll();
    unpressall();
    setDefaultWeightUnits();
    weightbox.classList.add('active');
    weightbtn.classList.add('pressed');
    
});
Volumebtn.addEventListener('click', ()=> {
    hideAll();
    unpressall();
    setDefaultVolumeUnits();
    Volumebox.classList.add('active');
    Volumebtn.classList.add('pressed');
    
});
tempbtn.addEventListener('click', ()=> {
    hideAll();
    unpressall();
    setDefaultTempUnits();
    tempbox.classList.add('active');
    tempbtn.classList.add('pressed');
});

function clearPressedList(unitList) {
    let unitItems = unitList.getElementsByClassName('pressedList');
    for (let i = 0; i < unitItems.length; i++) {
        unitItems[i].classList.remove('pressedList');
    }
}
function setDefaultLengthUnits() {
    let unitList1Length = document.getElementById('length-unit1');
    let unitList2Length = document.getElementById('length-unit2');
    unitList1Length.children[0].classList.add('pressedList'); // e.g., 'Meter (m)'
    unitList2Length.children[1].classList.add('pressedList'); // e.g., 'Feet'
}

function setDefaultAreaUnits() {
    let unitList1Area = document.getElementById('area-unit1');
    let unitList2Area = document.getElementById('area-unit2');
    unitList1Area.children[0].classList.add('pressedList'); // e.g., 'Square Meter (m²)'
    unitList2Area.children[1].classList.add('pressedList'); // e.g., 'Square Feet (ft²)'
}

function setDefaultWeightUnits() {
    let unitList1Weight = document.getElementById('weight-unit1');
    let unitList2Weight = document.getElementById('weight-unit2');
    unitList1Weight.children[0].classList.add('pressedList'); // e.g., 'Kilogram (Kg)'
    unitList2Weight.children[1].classList.add('pressedList'); // e.g., 'Gram'
}

function setDefaultVolumeUnits() {
    let unitList1Volume = document.getElementById('volume-unit1');
    let unitList2Volume = document.getElementById('volume-unit2');
    unitList1Volume.children[0].classList.add('pressedList'); // e.g., 'Liter'
    unitList2Volume.children[1].classList.add('pressedList'); // e.g., 'Milliliter (ml)'
}

function setDefaultTempUnits() {
    let unitList1Temp = document.getElementById('temp-unit1');
    let unitList2Temp = document.getElementById('temp-unit2');
    unitList1Temp.children[0].classList.add('pressedList'); // e.g., 'Celsius (°C)'
    unitList2Temp.children[1].classList.add('pressedList'); // e.g., 'Kelvin (K)'
}

var conversionFactorLength = {
    'Feet': 0.3048,
    'Inch': 0.0254,
    'Millimeter (mm)': 0.001,
    'Centimeter (cm)': 0.01,
    'Meter (m)': 1,
    'Kilometer (km)': 1000,
    'Mile': 1609.34,
    'Yard': 0.9144
};
var conversionFactorArea = {
    'Acre': 4046.85642,
    'Hectare': 10000,
    'Square Feet (ft²)': 0.09290304,
    'Square Inch': 0.00064516,
    'Square Millimeter (mm²)': 0.000001,
    'Square Centimeter (cm²)': 0.0001,
    'Square Meter (m²)': 1,
    'Square Kilometer (km²)': 1000000,
    'Square Mile': 2589988.11,
    'Square Yard': 0.83612736
};
var conversionFactorWeight = {
    'Kilogram (Kg)': 1,
    'Gram': 0.001,
    'Milligram (mg)': 0.000001,
    'Pound': 0.453592,
    'Ounce': 0.0283495,
    'Metric Ton': 1000,
    'Long Ton': 1016.05,
    'Short Ton': 907.185,
    'Carat': 0.0002,
    'Atomic mass unit': 1.66053906660e-27
};

var input1Length = document.getElementById('length-input1');
var input2Length = document.getElementById('length-input2');
var unitList1Length = document.getElementById('length-unit1');
var unitList2Length= document.getElementById('length-unit2');

let unit1Length = 'Meter (m)';
let unit2Length = 'Feet';

unitList1Length.addEventListener('click', function(e) {
    unit1Length = e.target.innerText;
    clearPressedList(unitList1Length);
    e.target.classList.add('pressedList');
    calculateLength();
});

unitList2Length.addEventListener('click', function(e) {
    unit2Length = e.target.innerText;
    clearPressedList(unitList2Length);
    e.target.classList.add('pressedList');
    calculateLength();
});

input1Length.addEventListener('input', function() {
    calculateLength();
});

function calculateLength(){
    var value = parseFloat(input1Length.value);

    if (isNaN(value)) {
        input2Length.value = '';
        return;
    }

    var valueInMeters = value * conversionFactorLength[unit1Length];
    var result = valueInMeters / conversionFactorLength[unit2Length];
    input2Length.value = result.toFixed(7);
}



// For the Area Section =>>

var input1Area = document.getElementById('area-input1');
var input2Area = document.getElementById('area-input2');
var unitList1Area = document.getElementById('area-unit1');
var unitList2Area = document.getElementById('area-unit2');

let unit1Area = 'Square Feet (ft²)';
let unit2Area = 'Square Meter (m²)';

unitList1Area.addEventListener('click', function(e) {
    unit1Area = e.target.innerText.trim();
    clearPressedList(unitList1Area);
    e.target.classList.add('pressedList');
    calculateArea();
});

unitList2Area.addEventListener('click', function(e) {
    unit2Area = e.target.innerText.trim();
    clearPressedList(unitList2Area);
    e.target.classList.add('pressedList');
    calculateArea();
});

input1Area.addEventListener('input', function() {
    calculateArea();
});

function calculateArea(){
    var value = parseFloat(input1Area.value);

    if (isNaN(value) || value == '') {
        input2Area.value = '';
        return;
    }

    var valueInSquareMeters = value * conversionFactorArea[unit1Area];
    var result = valueInSquareMeters / conversionFactorArea[unit2Area];
    input2Area.value = result.toFixed(7);
}


//For the Weight Section

var input1Weight = document.getElementById('weight-input1');
var input2Weight = document.getElementById('weight-input2');
var unitList1Weight = document.getElementById('weight-unit1');
var unitList2Weight = document.getElementById('weight-unit2');

let unit1Weight = 'Kilogram (Kg)';
let unit2Weight = 'Gram';

unitList1Weight.addEventListener('click', function(e) {
    unit1Weight = e.target.innerText;
    clearPressedList(unitList1Weight);
    e.target.classList.add('pressedList');
    calculateWeight();
});

unitList2Weight.addEventListener('click', function(e) {
    unit2Weight = e.target.innerText;
    clearPressedList(unitList2Weight);
    e.target.classList.add('pressedList');
    calculateWeight();
});

input1Weight.addEventListener('input', function() {
    calculateWeight();
});

function calculateWeight() {
    var value = parseFloat(input1Weight.value);

    if (isNaN(value)) {
        input2Weight.value = '';
        return;
    }

    var valueInKilograms = value * conversionFactorWeight[unit1Weight];
    var result = valueInKilograms / conversionFactorWeight[unit2Weight];
    input2Weight.value = result.toFixed(7);
}


//For The Volume Sections

var conversionFactorVolume = {
    'Liter': 1,
    'Milliliter (ml)': 0.001,
    'US Gallon': 3.78541,
    'Cubic Millimeter (mm³)': 0.000001,
    'Cubic Centimeter (cm³)': 0.001,
    'Cubic Meter (m³)': 1000,
    'Cubic Kilometer (km³)': 1000000000,
    'Cubic Foot': 28.3168466,
    'Cubic Inch': 0.016387064,
    'Cubic Mile': 4168181825.44,
    'Cubic Yard': 764.554857984
};

var input1Volume = document.getElementById('volume-input1');
var input2Volume = document.getElementById('volume-input2');
var unitList1Volume = document.getElementById('volume-unit1');
var unitList2Volume = document.getElementById('volume-unit2');

let unit1Volume = 'Liter';
let unit2Volume = 'Milliliter (ml)';

unitList1Volume.addEventListener('click', function(e) {
    unit1Volume = e.target.innerText;
    clearPressedList(unitList1Volume);
    e.target.classList.add('pressedList');
    calculateVolume();
});

unitList2Volume.addEventListener('click', function(e) {
    unit2Volume = e.target.innerText;
    clearPressedList(unitList2Volume);
    e.target.classList.add('pressedList');
    calculateVolume();
});

input1Volume.addEventListener('input', function() {
    calculateVolume();
});

function calculateVolume() {
    var value = parseFloat(input1Volume.value);
    if (isNaN(value)) {
        input2Volume.value = '';
        return;
    }
    var valueInLiters = value * conversionFactorVolume[unit1Volume];
    var result = valueInLiters / conversionFactorVolume[unit2Volume];
    input2Volume.value = result.toFixed(7);
}


//For Temprature Section

var input1Temp = document.getElementById('temp-input1');
var input2Temp = document.getElementById('temp-input2');
var unitList1Temp = document.getElementById('temp-unit1');
var unitList2Temp = document.getElementById('temp-unit2');

let unit1Temp = 'Celsius (°C)';
let unit2Temp = 'Fahrenheit (°F)';

unitList1Temp.addEventListener('click', function(e) {
    unit1Temp = e.target.innerText;
    clearPressedList(unitList1Temp);
    e.target.classList.add('pressedList');
    calculateTemp();
});

unitList2Temp.addEventListener('click', function(e) {
    unit2Temp = e.target.innerText;
    clearPressedList(unitList2Temp);
    e.target.classList.add('pressedList');
    calculateTemp();
});

input1Temp.addEventListener('input', function() {
    calculateTemp();
});

function calculateTemp() {
    var value = parseFloat(input1Temp.value);
    if (isNaN(value)) {
        input2Temp.value = '';
        return;
    }
    var result;
    if (unit1Temp === 'Celsius (°C)') {
        if (unit2Temp === 'Kelvin (K)') {
            result = value + 273.15;
        } else if (unit2Temp === 'Fahrenheit (°F)') {
            result = (value * 9/5) + 32;
        } else {
            result = value;
        }
    } else if (unit1Temp === 'Kelvin (K)') {
        if (unit2Temp === 'Celsius (°C)') {
            result = value - 273.15;
        } else if (unit2Temp === 'Fahrenheit (°F)') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }
    } else if (unit1Temp === 'Fahrenheit (°F)') {
        if (unit2Temp === 'Celsius (°C)') {
            result = (value - 32) * 5/9;
        } else if (unit2Temp === 'Kelvin (K)') {
            result = (value - 32) * 5/9 + 273.15;
        } else {
            result = value;
        }
    }
    input2Temp.value = result.toFixed(4);
}
