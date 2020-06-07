package emojioji;

import emoji4j.EmojiUtils;

import javax.inject.Singleton;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Singleton
class EmojiService {
    private ArrayList<Emoji> emojis;
    private Map<String, Integer> emojisNameToIndex = new ConcurrentHashMap<>();
    private Map<Integer, String> emojisIndexToName = new ConcurrentHashMap<>();


    public EmojiService() {
        emojis = new ArrayList<Emoji>();
        Emoji grinning = new Emoji("grinning", EmojiUtils.emojify(":grinning:"));
        emojis.add(grinning);
        emojisNameToIndex.put("grinning", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"grinning");
        Emoji smiley = new Emoji("smiley", EmojiUtils.emojify(":smiley:"));
        emojis.add(smiley);
        emojisNameToIndex.put("smiley", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"smiley");
        Emoji smile = new Emoji("smile", EmojiUtils.emojify(":smile:"));
        emojis.add(smile);
        emojisNameToIndex.put("smile", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"smile");
        Emoji grin = new Emoji("grin", EmojiUtils.emojify(":grin:"));
        emojis.add(grin);
        emojisNameToIndex.put("grin", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"grin");
        Emoji child = new Emoji("child", EmojiUtils.emojify(":child:"));
        emojis.add(child);
        emojisNameToIndex.put("child", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"child");
        Emoji laughing = new Emoji("laughing", EmojiUtils.emojify(":laughing:"));
        emojis.add(laughing);
        emojisNameToIndex.put("laughing", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"laughing");
        Emoji wink = new Emoji("wink", EmojiUtils.emojify(":wink:"));
        emojis.add(wink);
        emojisNameToIndex.put("wink", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"wink");
        Emoji person = new Emoji("adult", EmojiUtils.emojify(":adult:"));
        emojis.add(person);
        emojisNameToIndex.put("adult", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"adult");
        Emoji olderPerson = new Emoji("older_adult", EmojiUtils.emojify(":older_adult:"));
        emojis.add(olderPerson);
        emojisNameToIndex.put("older_adult", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"older_adult");
        Emoji heartEyes = new Emoji("heart_eyes", EmojiUtils.emojify(":heart_eyes:"));
        emojis.add(heartEyes);
        emojisNameToIndex.put("heart_eyes", emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1,"heart_eyes");
    }

    Collection<Emoji> allEmojis() {
        return emojis;
    }

    Optional<Emoji> findEmoji(@NotBlank String name) {
        return Optional.ofNullable(emojis.get(emojisNameToIndex.get(name)));
    }

    Emoji saveEmoji(@NotNull @Valid Emoji emoji) {
        emojis.add(emoji);
        emojisNameToIndex.put(emoji.getName(), emojis.size()-1);
        emojisIndexToName.put(emojis.size()-1, emoji.getName());
        return emoji;
    }

    void deleteEmoji(@NotBlank String name) {
        Integer index = emojisNameToIndex.get(name);
        emojisNameToIndex.remove(name);
        emojisIndexToName.remove(index);
        emojis.remove(index.intValue());
    }
}
