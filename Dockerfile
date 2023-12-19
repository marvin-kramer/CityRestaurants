FROM openjdk:17-alpine

COPY target/CityRestaurantsDB-0.0.1-SNAPSHOT.jar /backend.jar

CMD ["java", "-jar", "/backend.jar"]