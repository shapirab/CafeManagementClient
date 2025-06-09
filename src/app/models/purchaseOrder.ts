export interface PurchaseOrder{
  id: number,
  name: string,
  productId: number,
  userId: number,
  quantity: number,
  totalAmount: number,
  comments?: string
}
