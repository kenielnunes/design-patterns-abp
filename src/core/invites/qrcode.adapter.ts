import { toString } from "qrcode";

export class QRCodeAdapter {
  static async generateQRCode(data: string): Promise<string> {
    try {
      const qrCode = await toString(data, { type: "terminal" }); // Gerando o QR Code como string
      return qrCode; // Retornando o QR Code gerado
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
      throw error; // Lançando o erro novamente para o código que chamou o método lidar com ele
    }
  }
}
