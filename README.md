# rain

### Project Structure
`index.ts` is the entry point <br>
`src/` contains the database wrapper, endpoint handlers and types.


### Types
There are two objects `Invoices` and `LineItems`


### Handlers
The two handlers that were built out are `getInvoice` and `setInvoice`. <br>

`getInvoice` retrieves an invoice given its id. <br>
`setInvoice` sets an invoice along with its corresponding line items.


### Database Wrapper
The database wrapper handles setting and getting `Invoices` and `LineItems`.
The implemented functions here are:
`setInvoice`, `getInvoice`, `getLineItemsByInvoiceIds` and `setLineItems`


