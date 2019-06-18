DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Fried Chicken Burger", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Angus Beef Burger", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Deep Surprise Burger", FALSE);