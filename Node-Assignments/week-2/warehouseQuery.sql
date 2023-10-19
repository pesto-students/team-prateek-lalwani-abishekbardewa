-- Warehouse Database Query

SHOW DATABASES;
USE warehouse_db_pesto;
SHOW TABLES;

-- 1. Find the item that has the minimum weight. 
SELECT * FROM items where weight = (SELECT MIN(weight) FROM items);

-- 2. Find the different warehouses in "Pune".
SELECT * FROM warehouses where city = 'Pune';

-- 3. Find the details of items ordered by a customer named "John Doe".
SELECT i.itemNo, i.description, io.orderedQuantity, c.cName
FROM customer c
JOIN orders o ON c.cno = o.cno
JOIN itemsOrders io ON o.ono = io.ono
JOIN items i ON io.itemNo = i.itemNo
WHERE c.cName = 'John Doe';

-- 4. Find a Warehouse that has the maximum number of stores.
SELECT w.wid, w.wName, w.location, COUNT(s.sid) AS storeCount FROM 
warehouses w 
LEFT JOIN stores s ON w.wid = s.wid
GROUP BY w.wid, w.wName, w.location
ORDER BY storeCount > 1 DESC
LIMIT 1;

-- 5. Find an item that is ordered for a minimum number of times.
SELECT * FROM itemsOrders where orderedQuantity = (SELECT MIN(orderedQuantity) FROM itemsOrders);
SELECT * FROM items
WHERE itemNo = (SELECT itemNo FROM itemsOrders WHERE orderedQuantity = (SELECT MIN(orderedQuantity) FROM itemsOrders));

-- 6. Find the detailed orders given by each customer.
SELECT c.cno, c.cName, c.addr, c.cusCity, o.oDate, io.orderedQuantity, i.description, i.weight, i.cost
FROM customer c
JOIN customerOrders co ON c.cno = co.cno
JOIN orders o ON co.ono = o.ono
JOIN itemsOrders io ON o.ono = io.ono
JOIN items i ON io.itemNo = i.itemNo;









