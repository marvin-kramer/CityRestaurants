package ch.bbw.cityrestaurant.api;

import ch.bbw.cityrestaurant.domain.City;
import ch.bbw.cityrestaurant.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("cities")
public class CitiesController {

    @Autowired
    private CityRepository cityRepository;

    @PostMapping("")
    public City createCity(@RequestBody City city) {
        return cityRepository.save(city);
    }

    @GetMapping("{id}")
    public Optional<City> getCityById(@PathVariable String id){
        return cityRepository.findById(id);
    }

    @GetMapping("")
    public List<City> searchCitiesByName(@RequestParam String name) {
        return cityRepository.findCitiesByNameStartsWithIgnoreCase(name);
    }

}
