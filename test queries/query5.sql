use apnabazaar;

select CartStatus from Cart where CartID>5 and ProductQty between 1 and 5 order by BillNumber DESC;