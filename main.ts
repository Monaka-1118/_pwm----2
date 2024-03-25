radio.onReceivedValue(function (name, value) {
    if (name == "Arm") {
        Arm_Angle = value
    } else if (name == "Boom") {
        Boom_Angle = value
    } else if (name == "pen") {
        pen = value
    }
})
let pen = 0
let Boom_Angle = 0
let Arm_Angle = 0
radio.setGroup(1)
Arm_Angle = 1450
Boom_Angle = 1450
pen = 0
let red = 255
let green = 0
let blue = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    pins.servoSetPulse(AnalogPin.P12, Arm_Angle)
    pins.servoSetPulse(AnalogPin.P16, Boom_Angle)
    if (pen == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
