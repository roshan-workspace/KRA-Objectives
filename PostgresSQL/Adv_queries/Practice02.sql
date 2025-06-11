CREATE TABLE customers (
    cust_id SERIAL PRIMARY KEY,
    cust_name VARCHAR(100) NOT NULL
);


INSERT INTO customers (cust_name)
VALUES
('Raju'),
('Sham'),
('Paul'),
('Alex');


CREATE TABLE orders (
    ord_id SERIAL PRIMARY KEY,
    ord_date DATE NOT NULL,
    cust_id INTEGER NOT NULL,
    FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);


INSERT INTO orders (ord_date, cust_id)
VALUES
    ('2024-01-01', 1),  -- Raju first order
    ('2024-02-01', 2),  -- Sham first order
    ('2024-03-01', 3),  -- Paul first order
    ('2024-04-04', 2);  -- Sham second order



CREATE TABLE order_items (
    item_id SERIAL PRIMARY KEY,
    ord_id INTEGER NOT NULL,
    p_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (ord_id) REFERENCES orders(ord_id),
    FOREIGN KEY (p_id) REFERENCES products(p_id)
);


INSERT INTO order_items (ord_id, p_id, quantity)
VALUES
    (1, 1, 1),  -- Raju ordered 1 Laptop
    (1, 4, 2),  -- Raju ordered 2 Cables
    (2, 1, 1),  -- Sham ordered 1 Laptop
    (3, 2, 1),  -- Paul ordered 1 Mouse
    (3, 4, 5),  -- Paul ordered 5 Cables
    (4, 3, 1);  -- Sham ordered 1 Keyboard



CREATE TABLE products (
    p_id SERIAL PRIMARY KEY,
    p_name VARCHAR(100) NOT NULL,
    price NUMERIC NOT NULL
);

INSERT INTO products (p_name, price)
VALUES
    ('Laptop', 55000.00),
    ('Mouse', 500),
    ('Keyboard', 800.00),
    ('Cable', 250.00)
;


select * from order_items as oi
join orders as o on oi.ord_id = o.ord_id
join customers as c on o.cust_id = c.cust_id
join products as p on oi.p_id = p.p_id;


create view billing_info as 
select c.cust_name,o.ord_date,oi.quantity,p.p_name,p.price, (oi.quantity*p.price) as total_price from order_items as oi
join products as p
    on oi.p_id = p.p_id
join orders as o 
	on oi.ord_id = o.ord_id
join customers as c
	on o.cust_id = c.cust_id
	

-- total sales	
select sum(oi.quantity*p.price) as total_price from order_items as oi
join products as p
    on oi.p_id = p.p_id
join orders as o 
	on oi.ord_id = o.ord_id
join customers as c
	on o.cust_id = c.cust_id;
	
select c.cust_name, sum(p.price), string_agg(p.p_name,', '), array_agg(o.ord_date) from order_items as oi
join products as p
    on oi.p_id = p.p_id
join orders as o 
	on oi.ord_id = o.ord_id
join customers as c
	on o.cust_id = c.cust_id group by c.cust_name order by sum desc;


-- bill greater then 1500 hundred;
select p_name,sum from (
select p_name, sum(total_price) from billing_info 
  group by p_name ) where sum > 1500;

-- Having clause  
select p_name, sum(total_price) from billing_info 
  group by p_name 
  having sum(total_price) > 800;

-- Role up  
select coalesce(p_name, 'total'), sum(total_price),count(quantity) from billing_info 
  group by Rollup (p_name) order by sum;
  
	