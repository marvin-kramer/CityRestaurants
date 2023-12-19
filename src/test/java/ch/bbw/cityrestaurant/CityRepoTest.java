package ch.bbw.cityrestaurant;

import ch.bbw.cityrestaurant.domain.City;
import ch.bbw.cityrestaurant.domain.Restaurant;
import ch.bbw.cityrestaurant.repository.CityRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CityRepoTest extends ApplicationTests{
    @Autowired
    CityRepository cityRepository;

//    @Test
//    public void getCityByName(){
//        List<City> city = cityRepository.findCitiesByNameStartsWithIgnoreCase("Hongkong");
//
//        Restaurant lungKingHeen = new Restaurant("lung_king_heen_id", "Lung King Heen",
//                "8 Finance St, Central, Hongkong", "Exquisite kantonesische Küche", "paris_id");
//
//        Restaurant amber = new Restaurant("amber_id", "Amber",
//                "15 Queen's Road Central, Hongkong", "Modern europäische Küche mit asiatischem Einfluss", "paris_id");
//
//        List<Restaurant> restaurants = new ArrayList<>();
//        restaurants.add(lungKingHeen);
//        restaurants.add(amber);
//
//        City hongKongCity = new City("6565c69982143bd24d5d687c", "Hongkong",
//                "Hongkong", "999077", restaurants);
//
//        List<City> expectedCities = List.of(hongKongCity);
//        Assertions.assertArrayEquals(city.toArray(), expectedCities.toArray());
//    }
}
