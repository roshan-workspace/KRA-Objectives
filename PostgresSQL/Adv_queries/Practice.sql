create table student(
  s_id serial primary key,
  name varchar(150) not null
);

create table courses(
  c_id serial primary key,
  c_name varchar(150) not null,
  fee numeric not null
);

alter table student
rename to students;

select * from students;
select * from courses;
select * from enrollment;


create table enrollment(
  erm_id serial primary key,
  s_id int not null,
  c_id int not null,
  enrollment_date date not null,
  foreign key(s_id) references students(s_id),
  foreign key(c_id) references courses(c_id)
);


insert into students(name)
values('Raja'),('Mohan'),('Sita');

insert into students(name)
values('Arjun');


insert into courses(c_name, fee)
values
('Inner engineering',15000),
('Vipasna',500),
('Computer science',10000);

insert into courses(c_name, fee)
values('Photography',5000);

insert into enrollment(  s_id , c_id , enrollment_date)
values 
(1,1,'2025-05-01'), -- Raja enrolls in Inner engineering cr
(1,2,'2025-01-05'), -- Raja enrolls in Vipasna cr
(2,1,'2025-06-17'), -- Mohan enrolls in Inner engineering cr
(2,3,'2025-02-14'), -- Raja enrolls in Computer science cr
(3,3,'2025-04-19'); -- Sita enrolls in Computer science cr


insert into enrollment(  s_id , c_id , enrollment_date)
values (2,2,'2025-06-17');

insert into enrollment(  s_id , c_id , enrollment_date)
values (3,4,'2025-03-07');



select name,sum(c.fee),count(c.c_id) from enrollment as e
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by s.name 
order by sum desc;


select sum(c.fee),count(c.c_id),e.enrollment_date from enrollment as e
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by e.enrollment_date 
order by e.enrollment_date;

select sum(c.fee),count(c.c_id),e.enrollment_date from enrollment as e
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by e.enrollment_date 
order by e.enrollment_date;


select sum(c.fee)from enrollment as e
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id;

-- courses in a array
select s.name,array_agg(c.c_name),count(c.c_name) as course from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by s.name;

-- courses in string format
select s.name,string_agg(c.c_name,', ') as course from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by s.name;

  
select * from enrollment as e
left join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id where s;

select s.* from students as s
left join enrollment as e on s.s_id = e.s_id 
where e.s_id is null;


-- total fees paid by a student along with course count
select s.name,count(s.s_id),sum(c.fee) from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id group by s.name;

-- for date in year 2025
select extract(year from e.enrollment_date),name from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id

-- for date in month 12
select extract(month from e.enrollment_date),name from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id;

-- for day 17
select extract(year from e.enrollment_date),name from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id;


-- for month in text format
select lower(to_char(e.enrollment_date::DATE, 'FMDay,DD MON YY')),name from enrollment as e 
join students as s on s.s_id = e.s_id
join courses as c on c.c_id = e.c_id order by e.enrollment_date;








