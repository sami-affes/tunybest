CREATE TABLE videos (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    category VARCHAR(25) NOT NULL,
    genre VARCHAR(25) NOT NULL ,
    property VARCHAR(25) NOT NULL ,
    urlImage VARCHAR(25) NOT NULL ,
    urlTrailor VARCHAR(25) NOT NULL,
    urlVideo VARCHAR(25) NOT NULL,
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