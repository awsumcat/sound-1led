input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Chessboard)
    music.playTone(sound, music.beat(BeatFraction.Whole))
    sound += 10
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playTone(311, music.beat(BeatFraction.Whole))
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Giraffe)
    music.playTone(sound, music.beat(BeatFraction.Whole))
    sound += 10
    basic.pause(100)
    basic.clearScreen()
})
let sound = 0
sound = 262
basic.forever(function () {
	
})
