package emojioji;

import emojioji.Emoji;
import emojioji.EmojiService;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.annotation.*;

import java.util.Collection;
import java.util.Optional;

import static io.micronaut.http.MediaType.APPLICATION_JSON;

@Controller("/emoji")
public class EmojiController {
    private final EmojiService EmojiService;

    public EmojiController(EmojiService EmojiService) {
        this.EmojiService = EmojiService;
    }

    @Get(produces = APPLICATION_JSON)
    Collection<Emoji> index() {
        return EmojiService.allEmojis();
    }

    @Get("/{name}")
    @Produces(APPLICATION_JSON)
    Optional<Emoji> findEmoji(String name) {
        return EmojiService.findEmoji(name);
    }

    @Post(processes = APPLICATION_JSON)
    @Status(HttpStatus.CREATED)
    Emoji saveEmoji(String name, String emojiCode) {
        return EmojiService.saveEmoji(new Emoji(name, emojiCode));
    }

    @Delete("/{name}")
    @Status(HttpStatus.NO_CONTENT)
    void deleteEmoji(String name) {
        EmojiService.deleteEmoji(name);
    }
}
