 ###  Join 

- Inner Join  -> Gives all the matching row with respect to your provided common feild name;
```
select * from customers as c
inner join orders as o
on c.cust_id =  o.cust_id ;

select c.cust_name, count(o.order_id) from customers as c
 join orders as o
on c.cust_id =  o.cust_id group by cust_name ;

select c.cust_name, sum(o.price) from customers as c
 join orders as o
on c.cust_id =  o.cust_id group by cust_name ;
```


- left join

```
select c.cust_name, coalesce(sum(o.price),0) as total from customers as c
 left join orders as o
on c.cust_id =  o.cust_id group by cust_name;
```



- right join
```
select order_date, coalesce(sum(o.price),0) as total from customers as c
 right join orders as o
on c.cust_id =  o.cust_id group by order_date;
```