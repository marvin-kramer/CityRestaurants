package ch.bbw.cityrestaurant.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@AllArgsConstructor
@ToString
@Document(collection="cities")
public class City {
    @Id
    private String id;
    private String name;
    private String country;
    @Field("postal_code")
    private String postalCode;

    @DBRef
    private List<Restaurant> restaurants;
}
