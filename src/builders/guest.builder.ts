import { QRCodeAdapter } from "../core/invites/qrcode.adapter";
import { Guest } from "../models/guest";

export class GuestBuilder {
  private name: string = "";

  setName(name: string): GuestBuilder {
    this.name = name;
    return this;
  }

  async generateQRCode(): Promise<GuestBuilder> {
    await QRCodeAdapter.generateQRCode(`guest:${this.name}`, this.name);
    return this;
  }

  async build(): Promise<Guest> {
    return new Guest(
      this.name,
      `QR Code salvo no arquivo: qrcodes/${this.name}.png`
    );
  }
}
