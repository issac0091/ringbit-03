basic.forever(function () {
    if (input.temperature() >= 24.2) {
        servos.P0.setAngle(180)
    }
    if (input.temperature() <= 20) {
        servos.P0.setAngle(90)
    }
    if (input.temperature() <= 24.1 && input.temperature() >= 20.1) {
        servos.P0.setAngle(120)
    }
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
