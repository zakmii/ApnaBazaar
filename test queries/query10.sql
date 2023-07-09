use apnabazaar;

select BillNumber , DeliveryCharge as Dc,Qty from Bill where TotalAmount > 90 and BillTime < '8:11 AM' order by Qty , Discount Desc;