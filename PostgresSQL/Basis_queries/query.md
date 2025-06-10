The queries of postgresSQL

- For creating any table 

```

-- create table employee(
emp_id serial primary key,
fname varchar(100) not null,
lname varchar(50) not null,
email varchar(100) not null unique,
dept varchar(50),
salary decimal(10,2) default 30000.00,
hire_date date not null default current_date
);
```


- inserting the data for the employee table
```
insert into employee(fname, lname,email,dept, salary)
values
('Disha','negi','disha@gmail.com','HR',56000);
```


- for preview of all the data 
```
-- Select all employees
SELECT * FROM employees;
```



- Using Clauses
like: where, distinct, orderby, limit, like 


- Where clause examples:
```
 select * from employee
where fname='Suraj';


  select * from employee 
  where dept = 'IT';

  select * from employee
  where salary >=50000;
```


- logical operators  and/or
```
    select * from employee
  where dept = 'IT' or dept = 'Finance';


    select * from employee
  where dept = 'IT' and salary >= 50000;
```

- in/not in

```
select * from employee where salary>=35000 and dept in('IT', 'HR');

select * from employee where salary>=35000 and dept not in('IT', 'HR','Casting');
```


- distinct clause

```
select distinct dept from employee;
```
it gives all the different dept from the db without repeating.


- order by helps us to sort the date in a particular order
```
select * from employee order by salary;


select * from employee order by fname;


select * from employee order by lname;


select * from employee order by salary desc;

```
-- Note:order by default order by sort the date in asc order to make it desc add desc after the column name;


- limit is used to limit the number of responces we get
```
select * from employee order By emp_id desc limit 5;
```


- Like

```
select * from employee where fname like 'a%';

select * from employee where fname like '_a%;

select * from employee where email like '%outlook.com";

select * from employee where lname ilike '%A'; // case insesitive

```



--- Aggreate functions

- COUNT

```
select count(emp_id) from employee;
select count(emp_id) from employee where lname= 'pandit';
```

- SUM
```
select sum(salary) from employee;
```

- AVG 

```
select avg(salary) from employee;
```


- MIN
```
select min(salary) from employee;
```

- MAX
```
select max(salary) from employee;
```


 

--- GROUP BY
Is used for grouping the data with some comman ground;

```
select dept , count(emp_id) from employee group by dept;

select dept , count(emp_id), sum(salary) from employee group by dept;
```


--- STRING FUNCTIONS

- concat
```
select concat(fname,' ',lname) As FullName from employee;
select concat_ws('-',fname,lname) as fullname from employee;
```


- substr
```
 select substr('Hello, this is good', 1,6);
 ```


 - reverse
 ```
 select reverse(fname) from employee;
 ```

- upper
 ```
 select upper(fname) from employee;
 ```

 -lower
 ```
 select lower(lname) from employee;
 ```




-------------------------------------
For making change in the structure of any table


- adding any new column;
alter table person
add column age int;

- adding any new column with default value in it;
```
alter table person
add column age int default 1;
```


- droping any column;
```
alter table person
drop column age;
```


-  Updating table name
```
alter table person
rename column name to fname
```


- renaming the name of table
```
alter table person
rename to user
```



---------------
--- CASE Constraints

for creaing a salary category
```
 select fname, salary , case when salary >=50000 then 'HIGH' When salary between 35000 and 50000 then 'MID' else 'LOW' end as sal_cat from employees;
```

for getting 10% bonus
```
select fname, salary , case when salary > 10000 then round(salary*0.10) end as bonus from employees;
```

grouping by salary category
```
select  case when salary >=50000 then 'HIGH' When salary between 35000 and 50000 then 'MID' else 'LOW' end as sal_cat, count(emp_id) from employees  group by sal_cat;
```

