let game_started = false
basic.showString("Reaction")
basic.forever(function () {
    game_started = false
    basic.pause(randint(2000, 6000))
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    game_started = true
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            game_started = false
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
                game_started = false
            }
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})
