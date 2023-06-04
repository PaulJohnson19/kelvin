const kelvin = '293'
//kelvin is constant and forecast today is 293*

var celsius = kelvin - 273;
//celsius is found by taking 273 from kelvin

var fahrenheit2 = celsius * (9 / 5) + 32 
//fahrenheit = celsius * (9 / 5) + 32

var fahrenheit1= (Math.floor(fahrenheit2) )
//built in math function to round down to temp floor

console.log(`The temperature is ${fahrenheit1} degrees fahrenheit`)
