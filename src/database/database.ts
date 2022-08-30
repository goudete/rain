import { Invoice, LineItem } from "../types/types"
import { v4 as uuidv4 } from 'uuid';


export class Database {
    invoices: { [id: string]: Invoice }
    lineItems: { [id: string]: LineItem }

    constructor() {
        this.invoices = {}
        this.lineItems = {}
    }

    setInvoice(invoice: Invoice): string {
        const uuid = uuidv4();
        this.invoices[uuid] = invoice

        return uuid;
    }

    getInvoice(id: string) {
        return this.invoices[id];
    }

    getAllInvoices() {

    }

    getLineItemsByInvoiceIds(invoiceId: string) {
        const lineItemsById = []
        for (const [key, value] of Object.entries(this.lineItems)) {
            if (invoiceId === value.invoiceId) {
                lineItemsById.push(value);
            }
        }

        return lineItemsById;
    }

    setLineItems(lineItems: LineItem[], invoiceId: string) {

        lineItems.map((lineItem: LineItem) => {
            const uuid = uuidv4();
            this.lineItems[uuid] = {
                ...lineItem,
                invoiceId
            }
        });

    }

    getLineItems(id: string) {
        
    }

    getAllLineItems() {

    }
}