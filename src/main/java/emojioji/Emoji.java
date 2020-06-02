package emojioji;

import io.micronaut.core.annotation.Introspected;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Introspected
public class Emoji {

    @NotBlank
    @NotNull
    private String name;

    @NotBlank
    @NotNull
    private String id;

    @NotBlank
    @NotNull
    private String emojiCode;

    public Emoji(String name, String id, String emojiCode) {
        this.name = name;
        this.id = id;
        this.emojiCode = emojiCode;
    }

    public String getName() {
        return name;
    }

    public String getId(){ return id; }

    public String getEmojiCode(){ return emojiCode; }
}
