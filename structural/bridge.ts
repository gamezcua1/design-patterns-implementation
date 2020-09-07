
abstract class Devise {
  volume: number;
  turnedOn: boolean;
  channel: number;

  abstract turnOn(): boolean;
  abstract turnOff(): boolean;
}

class Radio extends Devise {
  volume = 0;
  turnedOn = false;
  channel = 0;

  turnOn () {
    this.turnedOn = true
    return this.turnedOn
  }

  turnOff () {
    this.turnedOn = false
    return this.turnedOn
  }
}

class TV extends Devise {
  volume = 0;
  turnedOn = false;
  channel = 0;

  turnOn () {
    this.turnedOn = true
    return this.turnedOn
  }

  turnOff () {
    this.turnedOn = false
    return this.turnedOn
  }
}

class Remote {
  devise: Devise;

  constructor (devise: Devise) {
    this.devise = devise
  }

  togglePower () {
    if (this.devise.turnedOn) { this.devise.turnOff() } else { this.devise.turnOn() }
  }

  volumeUp () {
    this.devise.volume += 1
  }

  volumeDown () {
    this.devise.volume -= 1
  }

  channelUp () {
    this.devise.channel += 1
  }

  channelDown () {
    this.devise.channel -= 1
  }
}

class RemoteV2 extends Remote {
  mute () {
    this.devise.volume = 0
  }
}

class SmartTVRemote extends RemoteV2 {
  goToMenu () {
    this.devise.channel = 0
  }
}

const radio = new Radio()
const tv = new TV()
const smartTV = new TV()
const basicRemote = new Remote(radio)
const tvRemote = new RemoteV2(tv)
const smartTVRemote = new SmartTVRemote(smartTV)

console.log({ radio, tv, smartTV })

for (let i = 0; i < 10; i++) {
  basicRemote.volumeUp()
  smartTVRemote.volumeUp()
  tvRemote.volumeUp()
}

console.log({ radio, tv, smartTV })

for (let i = 0; i < 3; i++) {
  basicRemote.volumeDown()
  smartTVRemote.volumeDown()
  tvRemote.volumeDown()
}

console.log({ radio, tv, smartTV })

for (let i = 0; i < 3; i++) {
  basicRemote.channelUp()
  smartTVRemote.channelUp()
  tvRemote.channelUp()
}

console.log({ radio, tv, smartTV })

tvRemote.mute()
smartTVRemote.mute()
smartTVRemote.goToMenu()

console.log({ radio, tv, smartTV })
