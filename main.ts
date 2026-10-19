radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("...")
    basic.showNumber(receivedNumber)
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Balance)
})
input.onButtonPressed(Button.B, function () {
    if (Balance >= 2) {
        Balance += -2
        radio.sendNumber(2)
        basic.showString("...")
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(Balance)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Balance = 0
Balance = 20
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
