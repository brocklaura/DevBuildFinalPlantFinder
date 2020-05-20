USE master
IF EXISTS(select * from sys.databases where name='PlantFinderDB')
ALTER DATABASE PlantFinderDB  SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

DROP DATABASE PlantFinderDB
GO
CREATE DATABASE PlantFinderDB
GO
Use PlantFinderDB
GO
DROP TABLE IF EXISTS Users;
GO

CREATE TABLE Users (
ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
UserName varchar (80) NOT NULL,
Password varchar (80) NOT NULL,
Email varchar (500) NOT NULL,
Fname varchar (80) NOT NULL,
Lname varchar (80) NOT NULL,
);
GO

INSERT INTO users(username, password, email, fname, lname)
VALUES
('LBrock', 'BestCook101', 'LBrock@gmail.com', 'Laura', 'Brock'),
('TBarron', 'BestDad101', 'TBarron@gmail.com', 'Tom', 'Barron'),
('BSpencer', 'BestInsta202', 'BSpencer@instagram.com', 'Brea', 'Spencer'),
('MDuBose', 'BestDogMom202', 'iloveriley@gmail.com', 'Michael', 'DuBose')

DROP TABLE IF EXISTS Plants;
GO
CREATE TABLE Plants (
ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
Title varchar (80) NOT NULL,
Image varchar (500) NOT NULL,
Description varchar (500) NOT NULL,
);
GO

INSERT INTO Plants (Title, Image, Description)
VALUES
('Snake Plant', 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551636850-gallery_the-sill_snake_laurentii_august_2230x.progressive.jpg?crop=0.752xw:0.581xh;0.223xw,0.0409xh&resize=768:*',
'Besides looking cool, it is a low-maintenance plant that is known for surviving droughts, making it perfect for newbies living in almost any environment. Although the snake plant prefers bright light, it can survive lower light levels.'),
('Pothos', 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551637106-screen-shot-2019-03-03-at-1-16-56-pm-1551637036.png?crop=0.835xw:0.649xh;0.0978xw,0.270xh&resize=768:*', 'Sometimes referred to as the cubicle plant, the pothos is a great pick if you are a self-proclaimed "black thumb".  NOT pet friendly!'),
('Dracaena', 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551637334-41655UkNk2L.jpg?crop=0.928xw:0.928xh;0.0400xw,0.0400xh&resize=768:*', 'If you live a high-maintenance life—always on the go, out at all hours—you need an "easy going, low-maintenance plant, like the Dracaena');
GO
DROP TABLE IF EXISTS My_Plants;


CREATE TABLE My_Plants (
ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
Water_Completed bit,
UserID int NOT NULL,
PlantID int NOT NULL
);
INSERT INTO My_Plants (UserID, Water_Completed, PlantID)
VALUES
(4, '1', 10),
(5, '0', 11);

DROP TABLE IF EXISTS Wish_List;


CREATE TABLE Wish_List (
ID int NOT NULL PRIMARY KEY IDENTITY(1,1),
UserID int NOT NULL,
PlantID int NOT NULL
);

INSERT INTO wish_list(UserID, PlantID)
VALUES
(3, 6),
(4, 7);
