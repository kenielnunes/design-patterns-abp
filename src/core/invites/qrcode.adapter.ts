import { QRCodeService } from "../../services/qrcode.service";

export class QRCodeAdapter {
  static async generateQRCode(data: string, fileName: string): Promise<void> {
    await QRCodeService.generateQRCode(data, fileName);
  }
}
