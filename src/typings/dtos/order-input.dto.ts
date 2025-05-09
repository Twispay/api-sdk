export class OrderInputDto {
  publicKey: string;
  cardTransactionMode: "auth" | "authAndCapture" | "credit";
  invoiceEmail?: string;
  saveCard?: boolean;
  backUrl: string;
  customer: {
    identifier: string;
    firstName?: string;
    lastName?: string;
    country?: string;
    city?: string;
    phone?: string;
    email?: string;
    tags?: string[];
  };
  order: {
    orderId: string;
    type: "purchase" | "recurring" | "managed" | "credit";
    amount: number;
    currency: string;
    description: string;
  };
}
