radio.onReceivedValue(function (name, value) {
    if (name == "Arm") {
        Arm_Angle = value
    } else if (name == "Boom") {
        Boom_Angle = value
    } else if (name == "pen") {
        if (value == 0) {
            red = 0
            green = 0
            blue = 0
        } else if (value == 1) {
            red = randint(0, 255)
            green = randint(0, 255)
            blue = randint(0, 255)
        }
    }
})
let blue = 0
let green = 0
let red = 0
let Boom_Angle = 0
let Arm_Angle = 0
radio.setGroup(1)
Arm_Angle = 1450
Boom_Angle = 1450
let pen = 0
red = 0
green = 0
blue = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    pins.servoSetPulse(AnalogPin.P12, Arm_Angle)
    pins.servoSetPulse(AnalogPin.P16, Boom_Angle)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
})
