basic.forever(function () {
    if (Maqueen_V5.Ultrasonic() < 10) {
        Maqueen_V5.motorStop(Maqueen_V5.Motors.M1)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CCW, 100)
        basic.pause(600)
    }
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
})
