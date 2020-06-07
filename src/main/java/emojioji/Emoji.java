package emojioji;

import emoji4j.EmojiUtils;
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
    private String emojiCode;

    public Emoji(String name, String emojiCode) {
        if(!EmojiUtils.isEmoji(emojiCode)) throw new RuntimeException("Bad EmojiCode");
        this.name = name;
        this.emojiCode = emojiCode;
    }

    public Emoji(String name) {
        if(!EmojiUtils.isEmoji(name)) throw new RuntimeException("Bad EmojiCode");
        this.name = name;
        this.emojiCode = EmojiUtils.emojify(name);
    }

    public String getName() {
        return name;
    }

    public String getEmojiCode(){ return emojiCode; }
}
