package emojioji;

import emojioji.Oji;
import emojioji.OjiService;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.*;

import java.util.Collection;
import java.util.Optional;

import static io.micronaut.http.MediaType.APPLICATION_JSON;

@Controller("/Ojis")
public class OjiController {
    private final OjiService OjiService;

    public OjiController(OjiService OjiService) {
        this.OjiService = OjiService;
    }

    @Get(produces = APPLICATION_JSON)
    Collection<Oji> index() {
        return OjiService.allOjis();
    }

    @Get("/{name}")
    @Produces(APPLICATION_JSON)
    Optional<Oji> findOji(String name) {
        return OjiService.findOji(name);
    }

   // @Post(processes = APPLICATION_JSON)
   // @Status(HttpStatus.CREATED)
   // Oji saveOji(String name, int age) {
   //     return OjiService.saveOji(new Oji(name, age));
    //}

    @Delete("/{name}")
    @Status(HttpStatus.NO_CONTENT)
    void deleteOji(String name) {
        OjiService.deleteOji(name);
    }
}
