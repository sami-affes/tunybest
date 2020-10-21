DROP DATABASE IF EXISTS tunyBest;

CREATE DATABASE tunyBest;

USE tunyBest;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(45)  NOT NULL,
  lastName varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  phone varchar(20) NOT NULL,
  address varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (firstName,lastName, email, password, phone, address) VALUES ('admin', 'admin','admin@gmail.com','admin','28816987','rue habib thameur');
INSERT INTO users (firstName,lastName, email, password, phone, address) VALUES ('talel', 'elGhali','talelElGhali@gmail.com','123456','52570599','rue maroc');
INSERT INTO users (firstName,lastName, email, password, phone, address) VALUES ('sami', 'affes','samiAffes@gmail.com','123','20301202','route gremda km4');


CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    userId varchar(10) NOT NULL,
    vidoeId varchar(10) NOT NULL,
    PRIMARY KEY (id)
);