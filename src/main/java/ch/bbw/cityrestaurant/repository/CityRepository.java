package ch.bbw.cityrestaurant.repository;

import ch.bbw.cityrestaurant.domain.City;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends MongoRepository<City, String> {
    List<City> findCitiesByNameStartsWithIgnoreCase(String name);
}

