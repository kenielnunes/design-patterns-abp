import * as fs from "fs";
import * as path from "path";
import { toFile } from "qrcode";

export class QRCodeService {
  static async generateQRCode(data: string, fileName: string): Promise<void> {
    const qrCodeDir = path.join(__dirname, "..", "qrcodes");

    // Cria a pasta 'qrcodes' caso ela não exista
    if (!fs.existsSync(qrCodeDir)) {
      fs.mkdirSync(qrCodeDir);
    }

    const filePath = path.join(qrCodeDir, `${fileName}.png`);

    try {
      await toFile(filePath, data);
      console.log(`QR Code gerado e salvo em: ${filePath}`);
    } catch (error) {
      console.error("Erro ao gerar o QR Code:", error);
    }
  }
}
