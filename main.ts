basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(100)
})
