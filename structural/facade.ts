
class VideoFile {
  fileName: string;
  format: string;

  constructor (fileName: string, format: string) {
    this.fileName = fileName
    this.format = format
  }
}

class Codec {}
class OggCompressionCodec extends Codec { }
class MPEG4CompressionCodec extends Codec { }

class CodecFactory {
  static extract (file: VideoFile) {
    if (file.format === 'mp4') return new MPEG4CompressionCodec()
    return new OggCompressionCodec()
  }
}

class BitrateReader {
  static read (filename: string, sourceCodec: Codec) {
    console.log(`Reading ${filename} from `)
    console.log(sourceCodec)
    return 'buffer'
  }

  static convert (buffer: string, destinationCodec: Codec) {
    console.log(`Converting ${buffer} to `)
    console.log(destinationCodec)
  }
}

class VideoConverter {
  convert (filename: string, format: string): void {
    const file = new VideoFile(filename, format)
    const sourceCodec = CodecFactory.extract(file)
    let destinationCodec: Codec

    if (format === 'mp4') destinationCodec = new MPEG4CompressionCodec()
    else destinationCodec = new OggCompressionCodec()

    const buffer = BitrateReader.read(filename, sourceCodec)
    const result = BitrateReader.convert(buffer, destinationCodec)

    return result
  }
}

const convertor = new VideoConverter()
convertor.convert('funny-cats-video.oog', 'mp4')
