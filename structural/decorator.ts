abstract class DataSource {
  abstract writeData(data: string): void;
  abstract readData(): string;
}

class FileDataSource extends DataSource {
  filename: string;
  data: string;

  constructor (filename: string) {
    super()
    this.filename = filename
  }

  writeData (data: string) {
    console.log(`WRITING ${data} on ${this.filename}`)
    this.data = data
  }

  readData () {
    console.log(`READING ${this.data} from ${this.filename}`)
    return this.data
  }
}

class DataSourceDecorator extends DataSource {
  wrapee: DataSource;

  constructor (source: DataSource) {
    super()
    this.wrapee = source
  }

  writeData (data: string) {
    this.wrapee.writeData(data)
  }

  readData (): string {
    return this.wrapee.readData()
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData (data: string) {
    const newData = data.split('').reduce((acc, c) => (acc += String.fromCharCode(c.charCodeAt(0) + 10)), '')

    this.wrapee.writeData(newData)
  }

  readData (): string {
    const data = this.wrapee.readData()
    const newData = data.split('').reduce((acc, c) => (acc += String.fromCharCode(c.charCodeAt(0) - 10)), '')

    return newData
  }
}

class JSONDecorator extends DataSourceDecorator {
  writeData (data: string) {
    this.wrapee.writeData(JSON.stringify({ data }))
  }

  readData (): string {
    const data = this.wrapee.readData()
    const newData = JSON.parse(data)

    return newData.data
  }
}

const data = 'cool jsons'
const source = new FileDataSource('cool.json')
const jsonSource = new JSONDecorator(source)
const encryptorSource = new EncryptionDecorator(jsonSource)

encryptorSource.writeData(data)

console.log({ source, jsonSource, encryptorSource })

const parserSource = new FileDataSource('cool.json')
parserSource.data = '{"data":"myyv*t}yx}"}'
const jsonParser = new JSONDecorator(source)
const encryptorParser = new EncryptionDecorator(jsonParser)

const parsedData = encryptorParser.readData()

console.log({ parsedData })
