package ch.bbw.cityrestaurant;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@ToString
@Document(collection="restaurant")
public class Restaurant {
    @Id
    private String id;
    private String name;
    private String address;
    private String cousine;
}

