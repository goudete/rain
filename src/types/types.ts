
export interface Invoice {
    id?: string,
    date: number,
    freelancerId: number,
    clientId: number,
    subtotal: number,
    status: string
}

export interface LineItem {
    id: string,
    title: string,
    tag: string,
    price: number,
    timestamp: number,
    quantity: number,
    invoiceId: string
}