package ch.bbw.cityrestaurant.api;

import ch.bbw.cityrestaurant.domain.Restaurant;
import ch.bbw.cityrestaurant.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("restaurants")
public class RestaurantsController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @GetMapping
    public List<Restaurant> restaurants(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String city_id
    ){
        return restaurantRepository.findAll();
    }
}
