import * as path from "path";
import { toFile } from "qrcode";

export class QRCodeService {
  static async generateAsFile(data: string): Promise<void> {
    const filePath = path.join(__dirname, "qrcode.png");

    try {
      await toFile(filePath, data);
      console.log(`QR Code gerado e salvo em: ${filePath}`);
    } catch (error) {
      console.error("Erro ao gerar o QR Code:", error);
    }
  }
}
