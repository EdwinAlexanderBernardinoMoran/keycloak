# Creando conexion con keycloak para utilizar su autenticacion.

- Ejecuta el siguiente comando para levantar el frontend en modo desarrollo.

```bash
npm start
```

- Luego acceder al puerto [htpp://localhost:3000](http://localhost:3000/)

- Ejecuta el siguiente comando para levantar el contendor de keycloak

```bash
docker compose up
```

- Para bajar los contenedores ejecuta el siguiente comando
```bash
docker compose down
```

- Luego accede al panel de Keycloak en la siguiente direccion [htpp://localhost:8080](http://localhost:8080/)
- Ingresa con las credenciales proporcionadas en el archivo de `docker-compose`.

- Para hacer la conexion con keycloak y el frontend comparto este recurso [https://www.youtube.com/watch?v=4aEMEZx4zZw&ab_channel=Inform%C3%A1ticaDP](https://www.youtube.com/watch?v=4aEMEZx4zZw&ab_channel=Inform%C3%A1ticaDP)
