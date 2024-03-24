radio.onReceivedValue(function (name, value) {
    if (name == "Arm") {
        Arm_Angle = value
    } else if (name == "Boom") {
        Boom_Angle = value
    } else if (name == "senkai") {
        senkai_Angle = value
    } else {
        pen = value
    }
})
let pen = 0
let senkai_Angle = 0
let Boom_Angle = 0
let Arm_Angle = 0
radio.setGroup(1)
Arm_Angle = 1450
Boom_Angle = 1450
senkai_Angle = 90
pen = 90
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
    pins.servoWritePin(AnalogPin.P11, pen)
})
