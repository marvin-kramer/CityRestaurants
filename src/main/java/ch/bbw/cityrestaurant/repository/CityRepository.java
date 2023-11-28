package ch.bbw.cityrestaurant.repository;

import ch.bbw.cityrestaurant.domain.City;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends MongoRepository<City, String> {
}

