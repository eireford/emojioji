package emojioji;

import emoji4j.EmojiUtils;

import javax.inject.Singleton;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Singleton
class EmojiService {
    private final Map<String, Emoji> emojis = new ConcurrentHashMap<>();

    public EmojiService() {
        emojis.put("grinning", new Emoji("grinning", UUID.randomUUID().toString(), EmojiUtils.htmlify(":grinning:")));
        emojis.put("smiley", new Emoji("smiley", UUID.randomUUID().toString(), EmojiUtils.htmlify(":smiley:")));
        emojis.put("smile", new Emoji("smile", UUID.randomUUID().toString(), EmojiUtils.htmlify(":smile:")));
        emojis.put("grin", new Emoji("grin", UUID.randomUUID().toString(), EmojiUtils.htmlify(":grin:")));
        emojis.put("child", new Emoji("child", UUID.randomUUID().toString(), EmojiUtils.htmlify(":child:")));
        emojis.put("laughing", new Emoji("laughing", UUID.randomUUID().toString(), EmojiUtils.htmlify(":laughing:")));
        emojis.put("wink", new Emoji("wink", UUID.randomUUID().toString(), EmojiUtils.htmlify(":wink:")));
        emojis.put("person", new Emoji("person", UUID.randomUUID().toString(), EmojiUtils.htmlify(":person:")));
        emojis.put("older person", new Emoji("older person", UUID.randomUUID().toString(), EmojiUtils.htmlify(":older person:")));
        emojis.put("heart_eyes", new Emoji("heart_eyes", UUID.randomUUID().toString(), EmojiUtils.htmlify(":heart_eyes:")));
    }

    Collection<Emoji> allEmojis() {
        return emojis.values();
    }

    Optional<Emoji> findEmoji(@NotBlank String name) {
        return Optional.ofNullable(emojis.get(name));
    }

    Emoji saveEmoji(@NotNull @Valid Emoji emoji) {
        emojis.put(emoji.getName(), emoji);
        return emoji;
    }

    void deleteEmoji(@NotBlank String name) {
        emojis.remove(name);
    }
}
