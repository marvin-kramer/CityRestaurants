package ch.bbw.cityrestaurant.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
}

