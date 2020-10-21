DROP DATABASE IF EXISTS tunybest;

CREATE DATABASE tunybest;

USE tunybest;

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

CREATE TABLE videos (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    category VARCHAR(25) NOT NULL,
    genre VARCHAR(25) NOT NULL ,
    property VARCHAR(100) NOT NULL ,
    urlImage VARCHAR(100) NOT NULL ,
    urlTrailor VARCHAR(100) NOT NULL,
    urlVideo VARCHAR(100) NOT NULL,
    counterVue INT NOT NULL,
    likeCounter INT NOT NULL,
    dislikeCounter INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE favorites (
    id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    videoId INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE comments (
    id int NOT NULL AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    userId int NOT NULL,
    videoId int NOT NULL,
    PRIMARY KEY (id)
);