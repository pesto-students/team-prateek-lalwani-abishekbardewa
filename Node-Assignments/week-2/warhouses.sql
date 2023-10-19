-- Warehouse Database design

SHOW DATABASES;
CREATE DATABASE warehouse_db_pesto;
USE warehouse_db_pesto;
DROP DATABASE warehouse_db_pesto;
SHOW TABLES;

-- Cities Table 
CREATE TABLE cities (city CHAR(20) PRIMARY KEY, state CHAR(20));
DESC cities;
INSERT INTO cities (city, state) VALUES
('Mumbai', 'Maharashtra'),
('Delhi', 'Delhi'),
('Bangalore', 'Karnataka'),
('Chennai', 'Tamil Nadu'),
('Pune', 'Maharashtra');
SELECT * FROM cities;


-- Warehouses Table 
CREATE TABLE warehouses (wid INT AUTO_INCREMENT PRIMARY KEY, wname CHAR(30), location CHAR(20), extraContent json, city CHAR(20),
    FOREIGN KEY (city) REFERENCES cities(city));
DESC warehouses;   
INSERT INTO warehouses (wName, location, extraContent, city) VALUES
('Warehouse A', 'Pune', '{"capacity": 1000}', 'Pune'),
('Warehouse B', 'Mumbai', '{"capacity": 800}', 'Mumbai'),
('Warehouse C', 'Delhi', '{"capacity": 1200}', 'Delhi'),
('Warehouse D', 'Bangalore', '{"capacity": 950}', 'Bangalore'),
('Warehouse E', 'Chennai', '{"capacity": 700}', 'Chennai');
INSERT INTO warehouses (wName, location, extraContent, city) VALUES
('Warehouse AA', 'Pune', '{"capacity": 1200}', 'Pune'),
('Warehouse BB', 'Mumbai', '{"capacity": 600}', 'Mumbai'),
('Warehouse CC', 'Mumbai', '{"capacity": 1200}', 'Mumbai');
SELECT * FROM warehouses;


-- Stores Table
CREATE TABLE stores (sid INT AUTO_INCREMENT PRIMARY KEY, storeName CHAR(20), cityLocation CHAR(20), wid INT,
    FOREIGN KEY (wid) REFERENCES warehouses(wid));
DESC stores;
INSERT INTO stores (storeName, cityLocation, wid) VALUES
('Store 1', 'Pune', 1),
('Store 2', 'Mumbai', 2),
('Store 3', 'Delhi', 3),
('Store 4', 'Bangalore', 4),
('Store 5', 'Chennai', 5);

INSERT INTO stores (storeName, cityLocation, wid) VALUES
('Store 11', 'Pune', 1),
('Store 22', 'Mumbai', 2),
('Store 33', 'Pune', 1);
SELECT * FROM stores;


-- Customer Table 
CREATE TABLE customer (cno INT AUTO_INCREMENT PRIMARY KEY, cName CHAR(50), addr VARCHAR(50), cusCity CHAR(20));
DESC customer;
INSERT INTO customer (cName, addr, cusCity) VALUES
('John Doe', '123 Main Street', 'Mumbai'),
('Jane Smith', '456 Elm Avenue', 'Delhi'),
('Bob Johnson', '789 Oak Road', 'Bangalore'),
('Alice Brown', '101 Pine Lane', 'Chennai'),
('David Wilson', '222 Maple Drive', 'Pune');
SELECT * FROM customer;


-- Orders Table 
CREATE TABLE orders (ono INT AUTO_INCREMENT PRIMARY KEY, cno INT, oDate DATE,FOREIGN KEY (cno) REFERENCES customer(cno));
DESC orders;
INSERT INTO orders (cno, oDate) VALUES
(1, '2023-10-17'),
(2, '2023-10-18'),
(3, '2023-10-19'),
(4, '2023-10-20'),
(5, '2023-10-21');
SELECT * FROM orders;


-- Items Table
CREATE TABLE items (itemNo INT AUTO_INCREMENT PRIMARY KEY, description TEXT, weight DECIMAL(5,2), cost DECIMAL(5,2));
DESC items;
INSERT INTO items (description, weight, cost) VALUES
('Widget', 2.50, 10.99),
('Gadget', 1.75, 7.49),
('Doodad', 3.25, 15.25),
('Thingamajig', 4.00, 18.99),
('Whatchamacallit', 2.10, 9.50);
SELECT * FROM items;



-- Junction table for the many-to-many relationship between customer and orders
CREATE TABLE customerOrders (
    cno INT,
    ono INT,
    FOREIGN KEY (cno) REFERENCES customer(cno),
    FOREIGN KEY (ono) REFERENCES orders(ono)
);
DESC customerOrders;
INSERT INTO customerOrders (cno, ono) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
SELECT * FROM customerOrders;

-- Junction table for the many-to-many relationship between items and orders
CREATE TABLE itemsOrders (
    itemNo INT,
    ono INT,
    orderedQuantity INT,
    FOREIGN KEY (itemNo) REFERENCES items(itemNo),
    FOREIGN KEY (ono) REFERENCES orders(ono)
);
DESC itemsOrders;
INSERT INTO itemsOrders (itemNo, ono, orderedQuantity) VALUES
(1, 1, 5),
(2, 2, 3),
(3, 3, 4),
(4, 4, 6),
(5, 5, 2);
SELECT * FROM itemsOrders;