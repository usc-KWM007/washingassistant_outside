function getTempHumid () {
    basic.pause(3000)
    serial.writeLine("Temperature " + Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    radio.sendString("Temperature " + Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    basic.pause(3000)
    serial.writeLine("Humidity " + Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1))
    radio.sendString("Humidity " + Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1))
}
let water = 0
let light2 = 0
let motor = 0
serial.setBaudRate(BaudRate.BaudRate115200)
radio.setGroup(23)
basic.forever(function () {
    getTempHumid()
    basic.pause(1000)
    motor = pins.analogReadPin(AnalogPin.P2)
    serial.writeLine("Wind " + motor)
    radio.sendString("Wind " + motor)
    basic.pause(1000)
    light2 = pins.analogReadPin(AnalogPin.P3)
    serial.writeLine("Light " + light2)
    radio.sendString("Light " + light2)
    basic.pause(1000)
    water = pins.analogReadPin(AnalogPin.P0)
    serial.writeLine("Water " + water)
    radio.sendString("Water " + water)
    basic.pause(1000)
})
