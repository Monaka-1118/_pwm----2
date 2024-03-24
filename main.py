def on_received_value(name, value):
    global Arm_Angle, Boom_Angle, senkai_Angle
    if name == "Arm":
        Arm_Angle = value
    elif name == "Boom":
        Boom_Angle = value
    elif name == "senkai":
        senkai_Angle = value
radio.on_received_value(on_received_value)

senkai_Angle = 0
Boom_Angle = 0
Arm_Angle = 0
radio.set_group(1)
Arm_Angle = 1450
Boom_Angle = 1450
senkai_Angle = 90
basic.show_leds("""
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    """)

def on_forever():
    pins.servo_set_pulse(AnalogPin.P12, Arm_Angle)
    pins.servo_set_pulse(AnalogPin.P16, Boom_Angle)
    pins.servo_write_pin(AnalogPin.P11, senkai_Angle)
basic.forever(on_forever)
