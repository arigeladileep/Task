create database taskdb;
use taskdb;
create table if not exists users1 (
	id int NOT NULL PRIMARY KEY auto_increment,
	uname varchar(255) NOT NULL,
    username varchar(255) NOT NULL ,
    upassword varchar(255) NOT NULL
);
INSERT INTO users1 (uname,username,upassword)
VALUES ('Siva', 's123', 'ACTIVE');

INSERT INTO users1 (uname,username,upassword)
VALUES ('Kumar', 's1234', 'ACTIVE');


select * from users1;