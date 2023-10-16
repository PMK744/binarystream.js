import type { BinaryStream } from '../../BinaryStream'
import { Endianness } from '../../Endianness'
import { Type } from '../Type'

export class Short extends Type {
  public static read(stream: BinaryStream, endian: Endianness): number {
    return stream.readShort(endian)
  }

  public static write(stream: BinaryStream, value: number, endian: Endianness): void {
    stream.writeShort(value, endian)
  }
}
