basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.Sun)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
