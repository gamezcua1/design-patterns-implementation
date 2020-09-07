class RoundPeg {
  radius: number;

  constructor (radius: number) {
    this.radius = radius
  }
}

class RoundHole {
  radius: number;

  constructor (radius: number) {
    this.radius = radius
  }

  fits (peg: RoundPeg) {
    return this.radius >= peg.radius
  }
}

class SquarePeg {
  width: number;

  constructor (width: number) {
    this.width = width
  }
}

class SquarePegAdapter extends RoundPeg {
  peg: SquarePeg;

  constructor (peg: SquarePeg) {
    super(peg.width * Math.sqrt(2) / 2)
    this.peg = peg
  }
}

const hole = new RoundHole(5)
const rpeg = new RoundPeg(2)
const bigRpeg = new RoundPeg(20)

console.log({
  rpeg: hole.fits(rpeg),
  bigRpeg: hole.fits(bigRpeg)
})

const smallSqpeg = new SquarePeg(5)
const largeSqpeg = new SquarePeg(100)

const smallSqpegAdapter = new SquarePegAdapter(smallSqpeg)
const largeSqpegAdapter = new SquarePegAdapter(largeSqpeg)

console.log({
  smallSqpegAdapter: hole.fits(smallSqpegAdapter),
  largeSqpegAdapter: hole.fits(largeSqpegAdapter)
})
