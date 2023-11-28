package ch.bbw.cityrestaurant.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@ToString
@AllArgsConstructor
@Document(collection="restaurant")
public class Restaurant {
    @Id
    private String id;
    private String name;
    private String address;
    private String cuisine;
    @Field("city_id")
    private String cityId;
}

