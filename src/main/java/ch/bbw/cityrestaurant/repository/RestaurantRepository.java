package ch.bbw.cityrestaurant.repository;

import ch.bbw.cityrestaurant.domain.Restaurant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
    List<Restaurant> findRestaurantByNameStartingWithIgnoreCase(String name);
}
