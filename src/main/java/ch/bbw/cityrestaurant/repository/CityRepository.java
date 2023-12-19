package ch.bbw.cityrestaurant.repository;

import ch.bbw.cityrestaurant.domain.City;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends MongoRepository<City, String> {

        List<City> findCitiesByNameStartsWithIgnoreCase(String name);

        List<City> findCitiesByNameStartsWithIgnoreCaseAndCountry(String name, String country);

        List<City> findCitiesByNameStartsWithIgnoreCaseAndPostalCode(String name, String postalCode);

        List<City> findCitiesByNameStartsWithIgnoreCaseAndCountryStartsWithIgnoreCaseAndPostalCodeStartsWithIgnoreCase(String name, String country, String postalCode);

        default List<City> searchCities(String name, String country, String postalCode) {
            if (country == null && postalCode == null) {
                return findCitiesByNameStartsWithIgnoreCase(name);
            } else if (country != null && postalCode == null) {
                return findCitiesByNameStartsWithIgnoreCaseAndCountry(name, country);
            } else if (country == null && postalCode != null) {
                return findCitiesByNameStartsWithIgnoreCaseAndPostalCode(name, postalCode);
            } else {
                return findCitiesByNameStartsWithIgnoreCaseAndCountryStartsWithIgnoreCaseAndPostalCodeStartsWithIgnoreCase(name, country, postalCode);
            }
        }

}


