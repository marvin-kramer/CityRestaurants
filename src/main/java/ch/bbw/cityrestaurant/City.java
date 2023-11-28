package ch.bbw.cityrestaurant;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@ToString
@Document(collection="cities")
public class City {
    @Id
    private String name;
    private String country;
    private String postalCode;
}
