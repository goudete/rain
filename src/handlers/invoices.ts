import express, { Express, Request, Response } from 'express';
import { Database } from '../database/database';
import { Invoice, LineItem } from '../types/types';

const database = new Database()

export async function getInvoice(
    req: Request<{ id: string }, {}, {}, {}>,
    res: Response
) {
    try {
        const { id } = req.params;
        const invoice = database.getInvoice(id);

        return res.status(200).send({
            invoice
        });

    } catch (error) {
        return res.status(500).send({
            Error: error
        });
    }
}


export async function setInvoice(
    req: Request<{}, {}, { invoice: Invoice, lineItems: LineItem[]}, {}>,
    res: Response
) {
    try {
        const { invoice, lineItems } = req.body;
        
        if (!invoice.date) {
            return res.status(400).send({
                message: 'invalid input, missing date'
            });
        }
        if (!invoice.freelancerId) {
            return res.status(400).send({
                message: 'invalid input, missing freelancerId'
            });
        }
        if (!invoice.clientId) {
            return res.status(400).send({
                message: 'invalid input, missing clientId'
            });
        }
        if (!lineItems) {
            return res.status(400).send({
                message: 'invalid input, missing lineItems'
            });
        }

        // calculate subtotal
        let subtotal = 0;

        lineItems.map((lineItem: LineItem) => {
            subtotal += (lineItem.price * lineItem.quantity)
        });

        const updatedInvoice = {
            date: invoice.date,
            freelancerId: invoice.freelancerId,
            clientId: invoice.clientId,
            subtotal,
            status: 'created',
        }

        const invoiceId = database.setInvoice(updatedInvoice);
        
        database.setLineItems(lineItems, invoiceId);

        return res.status(200).send({
            message: 'successfully created invoice',
            invoiceId
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            Error: error
        });
    }
}