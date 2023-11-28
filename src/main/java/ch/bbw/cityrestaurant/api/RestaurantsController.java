package ch.bbw.cityrestaurant.api;

import ch.bbw.cityrestaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestaurantsController {
    @Autowired
    RestaurantRepository restaurantRepository;
}
