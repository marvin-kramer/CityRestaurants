package ch.bbw.cityrestaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CitiesRESTController {

    @Autowired
    private CityRepository cityRepository;

    @GetMapping("cities")
    public List<City> getCities() {
        return cityRepository.findAll();
    }

    @PostMapping("cities")
    public City createCity(@RequestBody City city) {
        return cityRepository.save(city);
    }

}
