1) Find different types of departments in db?
--> select distinct dept from employee;


2) Display records with high-low salary?
--> select * from employee order by salary desc

3) How to see only three records of a table?
--> select * from employee order by salary desc limit 3;

4) Show records where first name starts with letter 'a'?
-->  select * from employee where fname ilike 'a%';


5) Show records where length of the lname is 4 character?
--> select * from employee where length(fname) = 4;


6) Find the total no of employees in database?
--> select count(emp_id) from employee;

7) Find no of employees in each department?
-->select dept, count(emp_id) from employee group by dept;

8) Find lowest paying salary?
--> select * from employee order by salary limit 1;
--> select * from employee where salary = (select min(salary) from employee);

9) Find hightest paying salary?
--> select * from employee order by salary desc limit 1;
--> select * from employee where salary = (select max(salary) from employee);


10) Find total salary paying IT department?
--> select sum(salary) from employee where dept = 'IT';

11) Average salary paying in each department?
--> select dept as Department_name , avg(salary) as average_salary  from employee group by dept;


