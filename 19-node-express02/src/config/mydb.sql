use crud_node2;

create table personas(
	id INT NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    direccion varchar(100),
    telefono varchar(10),
    primary key(id)
);

insert into personas(nombre, direccion, telefono) values("Rosa María", "Juan Ernesto #4784 Mi colonia", "6674567866");